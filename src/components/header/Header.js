
import React, {useRef, useEffect} from "react";
import Navbar from './Navbar';
import HeadContainer from './HeadContainer';
import flashNavbarAnimation from '../../assets/js/library.js';

const Header = () => {

  const header = useRef();

  useEffect(() => {
    flashNavbarAnimation(header.current);
  }, []);

  return (
    <>
      <header ref={header} className="header position-fixed start-0 top-0 w-100 pattern">

        <HeadContainer/>
        
        <Navbar/>

      </header>  

    </>
  )
};

export default Header;