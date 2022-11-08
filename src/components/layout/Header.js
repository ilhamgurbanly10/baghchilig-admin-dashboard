
import React, {useRef, useEffect} from "react";


const Header = () => {

  const header = useRef();

  useEffect(() => {
  }, []);

  return (
    <>
      <header ref={header} className="header">  
        header
      </header>  

    </>
  )
};

export default Header;