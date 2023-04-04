import { useMutation } from 'react-query';
import { get } from '../services/ApiService';
import { API } from '../config/config';

const UsePics = (onSuccess, onError) => {
  const searchPics = async () => {
    const response = await get(`${API}`);
    return response.data;
  };
  const { mutate, isError, isLoading, error } = useMutation('searchPics', () => searchPics(), {
    onSuccess,
    onError,
  });

  return {
    searchPics: () => mutate(),
    isError,
    searchError: error,
    isLoading,
  };
};
export default UsePics;
