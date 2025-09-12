import React from 'react';
import './style.css';
import Header from '../../layers/header/header';
import MainPage from '../../pages/main-page/main-page';
import Footer from '../../layers/footer/footer';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className='page-wrapper__main'>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
