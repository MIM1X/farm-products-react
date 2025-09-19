import React from 'react';
import './style.css';
import Title, { TitleSize } from '../title/title';

function Feature({ feature }) {
  return (
    <div
      className={`feature ${
        feature.isFarm ? 'feature--farm' : 'feature--shop'
      }`}
    >
      <div className='feature__header'>
        <img className='feature__image' src={feature.icon} />
        <div className='feature__title-wrapper'>
          <span className='feature__label'>
            {feature.isFarm ? 'Фермерские продукты' : 'Магазинные продукты'}
          </span>
          <Title size={TitleSize.SMALL}>{feature.title}</Title>
        </div>
      </div>

      <p className='feature__description'>{feature.description}</p>
    </div>
  );
}

export default Feature;
