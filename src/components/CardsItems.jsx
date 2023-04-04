import React from 'react';
import { Row, Spin, Typography } from 'antd';
import CardPic from './CardPic';
import { Link } from 'react-router-dom';

import '../utils/styles/CardsItems.css';

const { Text } = Typography;

function CardsItems({ isLoading, picsInfo }) {
  return (
    <Row className='Items-Rows'>
      {isLoading && 
        <Spin tip="Loading" size="large" />
      }
      {!isLoading && picsInfo && !picsInfo.length &&
        <div className="empty">
          <Text>No hay datos a mostrar!</Text>
        </div>
      }
      {!isLoading && picsInfo && picsInfo.length > 0 &&
        picsInfo.map((pic) => (
          <Link key={pic.id} to={{ pathname: `/pic/${pic.id}`, state: { pic }}}>
            <CardPic key={pic.id} pic={pic} />
          </Link>
        ))
      }
    </Row>
  );
}

export default CardsItems;
