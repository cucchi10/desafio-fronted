import React, { useState } from 'react';
import { Typography, Pagination } from 'antd';
import CustomLayout from '../../components/Layout';
import { PicContext, useContext } from '../../contexts/PicContext';
import CardsItems from '../../components/CardsItems';
import { currentPageDefault, picsPerPageDefault } from '../../utils/constants';


const { Title } = Typography;

function Home({ isLoading }) {

  const { pics } = useContext(PicContext);

  const [currentPage, setCurrentPage] = useState(currentPageDefault);
  const [picsPerPage] = useState(picsPerPageDefault);

  const indexOfLastPic = currentPage * picsPerPage;
  const indexOfFirstPic = indexOfLastPic - picsPerPage;
  const currentPics = pics.slice(indexOfFirstPic, indexOfLastPic);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <CustomLayout>
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
