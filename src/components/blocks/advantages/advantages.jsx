import React from 'react';
import './style.css';
import Title from '../../ui/title/title';
import Button from '../../ui/button/button';
import Feature from '../../ui/feature/feature';
import features from '../../../mocks/features';

function Advantages() {
  return (
    <section className='advantages'>
      <div className='advantages__wrapper'>
        <Title>Почему фермерские продукты лучше?</Title>
        <div className='advantages__lists'>
          <ul className='advantages__list advantages__list--farm'>
            {features.map(
              (feature) =>
                feature.isFarm && (
                  <li key={feature.id} className='advantages__item'>
                    <Feature feature={feature} />
                  </li>
                )
            )}
          </ul>
          <ul className='advantages__list advantages__list--shop'>
            {features.map(
              (feature) =>
                !feature.isFarm && (
                  <li key={feature.id} className='advantages__item'>
                    <Feature feature={feature} />
                  </li>
                )
            )}
          </ul>
        </div>

        <Button />
      </div>
    </section>
  );
}

export default Advantages;
