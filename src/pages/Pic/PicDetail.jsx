import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Typography, Result, Button, Spin } from 'antd';
import '../../utils/styles/PicDetail.css';
import { PicContext, useContext } from '../../contexts/PicContext';

import CustomLayout from '../../components/Layout';

import CardPic from '../../components/CardPic';


const { Title } = Typography;

function PicDetail({ isLoading }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoBack = () => {
    navigate(-1);
  }

  const [pic, setPic] = useState(null);

  const { pics } = useContext(PicContext);

  useEffect(() => {
    if (location.state) {
      setPic(location.state)
    } else if (location.pathname) {
      let ID = location.pathname.split('/').pop()
      let value = pics && pics.filter(pic => pic.id == ID)
      setPic(...value);
    }
  }, [location, isLoading]);

  return (
    <CustomLayout>
      <Button className='Button-Back' type="primary" onClick={handleGoBack}>Volver</Button>
      {isLoading && !pic && (
        <div className='Spin-Container'>
          <Spin tip="Loading" size="large" />
        </div>)
      }{!isLoading && !pic && (
        <Result
          status="404"
          title="404"
          subTitle="Lo sentimos, la imagen que está buscando no existe."
          extra={
            <Link to={'/'}>
              <Button type="primary" >
                Volver al inicio
              </Button>
            </Link>
          }
        />
      )}{
        !isLoading && pic && (
          <div className='Detail-Container'>
            <Title level={3}>Detalle de la imagen N° {pic.id} del album N° {pic.albumId}</Title>
            <CardPic key={pic.id} pic={pic} size='lg' />
          </div>
        )}

    </CustomLayout>
  );
}

export default PicDetail;