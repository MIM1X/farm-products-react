import React from 'react';
import './style.css';
import logo from '../../../assets/logo.svg';

function Logo() {
  return (
    <a className='logo' href='/'>
      <img
        className='logo__image'
        src={logo}
        alt='Логотип Фермерские продукты'
      />
      <span className='logo__text'>Фермерские продукты</span>
    </a>
  );
}

export default Logo;
