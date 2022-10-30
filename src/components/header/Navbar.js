import { logo } from '../files/Images';
import {useEffect, useRef} from 'react';
import { NavLink } from "react-router-dom";
import {closeNavbarNav} from '../../assets/js/library';
import {useTranslation} from "react-i18next";
import NavbarNav from './NavbarNav';
import WhiteBtn from '../elements/buttons/WhiteBtn';


const Navbar = () => {

    const {t, i18n} = useTranslation('common');

    useEffect(() => {
      const toggler = document.querySelector('.navbar-toggler');
      let buttons = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
      const dropdownButtons = document.querySelectorAll('.nav-item .dropdown-item');
      closeNavbarNav(toggler, [...buttons,...dropdownButtons]);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg flex-wrap m-0 py-2 py-lg-0 position-relative white-lg-border-bottom">

            <div className="navbar-container d-flex flex-wrap justify-content-start justify-content-lg-between align-items-center align-content-center w-100">

                <button className="navbar-toggler me-3 white-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-line"></span>
                </button>

                <NavLink className="navbar-brand d-block" to="/">
                    <img src={logo} alt="Navbar Brand" className="brand-img" />
                </NavLink>
                
                <div className="collapse navbar-collapse mobile-navbar-collapse-2 flex-grow-0 ms-auto"  id="navbarSupportedContent">
                    <NavbarNav/>     
                </div>

                <WhiteBtn url="/about-us" className="d-none d-lg-inline-block btn-1-reverse btn-1-small ms-5">
                    {t('buttons.contactUs')}
                </WhiteBtn>
            
            </div>

        </nav>
    )
}


export default Navbar;