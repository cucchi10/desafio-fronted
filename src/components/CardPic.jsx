import React from 'react';
import { Card } from 'antd';
import '../utils/styles/CardPic.css';

function CardPic({pic,size='xs'}) {
  let cardClassNames = `Card-Pic-${size}`;
  let containerClassNames = `Card-Pic-Container-${size}`;
  let imgClassNames = `Card-Pic-IMG-${size}`;
  return (
    <Card hoverable={true} title={pic.title} className={cardClassNames}>
      <div className={containerClassNames}>
        {size === 'xs' ?
          <img src={pic.thumbnailUrl} alt={pic.title} className={imgClassNames}/>
            :
          <img src={pic.url} alt={pic.title} className={imgClassNames}/>
        }
      </div>
    </Card>
  );
}

export default CardPic;