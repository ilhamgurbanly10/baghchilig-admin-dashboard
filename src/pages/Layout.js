import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import React, { useEffect, useState } from 'react';

const Layout = (props) => {

  return (
    <React.Fragment>  
      <Header/>
      {props.children}
      <Footer/>
    </React.Fragment>
  )
};

export default Layout;