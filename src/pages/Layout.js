import { BackToTopBtn } from '../components/elements/Buttons';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Head from '../components/Head';
import FlashProgress from '../components/flash/Progress';
import React, { useEffect, useState } from 'react';

const Layout = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => { setIsLoaded(true); }, 15000)
  }, [])

  return (
    <React.Fragment>  
      <Head/>
      <Header/>
      {props.children}
      <BackToTopBtn/>
      <Footer/>
      {!isLoaded && <FlashProgress /> }
    </React.Fragment>
  )
};

export default Layout;