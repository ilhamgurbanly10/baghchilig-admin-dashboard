
import React, {useRef, useEffect} from "react";
import Navbar from './Navbar';
import flashNavbarAnimation from '../../assets/js/library.js';
// import { BackToTopBtn } from './components/elements/Buttons';

const Header = () => {

  const header = useRef();

  useEffect(() => {
    flashNavbarAnimation(header.current);
  }, []);

  return (
    <>
      <header ref={header} className="header position-fixed start-0 top-0 w-100 pattern">
        
        <Navbar/>

      </header>  

      {/* <BackToTopBtn/> */}
    </>
  )
};

export default Header;