import React, { useEffect, useState } from 'react';
import { useNavigate , useLocation, Link } from 'react-router-dom';
import { Typography, Result, Button } from 'antd';
import '../utils/styles/PicDetail.css';
import {PicContext} from '../contexts/PicContext';

import CustomLayout from '../components/Layout';

import CardPic from '../components/CardPic';


const { Title } = Typography;

function PicDetail() {
  const navigate = useNavigate ();
  const [pic, setPic] = useState(null);
  const location = useLocation();
  const {pics} = React.useContext(PicContext);

   const handleGoBack = () => {
    navigate(-1);
  }

  useEffect(() => {
    if (location.pathname) {
      let ID = location.pathname.split('/').pop()
      let value = pics && pics.filter(pic =>pic.id == ID)
      setPic(...value);
    }
  }, [location, pics]);

  return (
    <CustomLayout>
      <Button className='Button-Back' type="primary" onClick={handleGoBack}>Volver</Button>
      {pic ? (
        <div className='Detail-Container'>
          <Title level={3}>Detalle de la imagen N° {pic.id} del album N° {pic.albumId}</Title>
          <CardPic key={pic.id} pic={pic} size='lg' />
        </div>
      ) : (
          <Result
          status="404"
          title="404"
          subTitle="Lo sentimos, la imagen que está buscando no existe."
          extra={
            <Link to={{ pathname: '/'}}>
              <Button type="primary" >
                Volver al inicio
              </Button>
            </Link>
          }
        />
      )}
      
    </CustomLayout>
  );
}

export default PicDetail;