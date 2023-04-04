import React, { useContext, useEffect, useState } from 'react';
import { Typography, notification, Pagination } from 'antd';
import CustomLayout from '../../components/Layout';
import { PicContext } from '../../contexts/PicContext';

import CardsItems from '../../components/CardsItems';

import UsePics from '../../hooks/UsePics';

import { currentPageDefault, picsPerPageDefault } from '../../utils/constants';


const { Title } = Typography;

function Home() {
  const [showNotification, NotificationProvider] = notification.useNotification();
  const notificationError = (message = 'Error al obtener datos') => {
    showNotification.error({ message });
  };
  const { pics, updatePicContext } = useContext(PicContext);

  const { searchPics, isLoading } = UsePics((data) => {
    updatePicContext(data)
  }, (error) => notificationError(error?.data));

  const [currentPage, setCurrentPage] = useState(currentPageDefault);
  const [picsPerPage] = useState(picsPerPageDefault);

  const indexOfLastPic = currentPage * picsPerPage;
  const indexOfFirstPic = indexOfLastPic - picsPerPage;
  const currentPics = pics.slice(indexOfFirstPic, indexOfLastPic);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const loadData = () => {
    searchPics();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <CustomLayout>
      {NotificationProvider}
      <Title level={3}>Listado de Imagenes</Title>
      <CardsItems isLoading={isLoading} pics={currentPics} />
      <Pagination
        current={currentPage}
        pageSize={picsPerPage}
        total={pics.length}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </CustomLayout>
  );
}

export default Home;
