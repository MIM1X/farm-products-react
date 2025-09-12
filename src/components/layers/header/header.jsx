import React from 'react';
import './style.css';
import Navigation from '../navigation/navigation';
import Logo from '../../ui/logo/logo';

function Header() {
  return (
    <header className='header'>
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;
