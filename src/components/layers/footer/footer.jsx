import React from 'react';
import './style.css';
import Logo from '../../ui/logo/logo';

function Footer() {
  return (
    <footer className='footer'>
      <Logo />
      <p className='footer__copyright'>Создано 2025</p>
    </footer>
  );
}

export default Footer;
