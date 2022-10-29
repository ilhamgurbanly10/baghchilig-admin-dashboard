import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useRef} from 'react';


const NavbarNav = (props) => {

    const {t, i18n} = useTranslation('common');

    const closer = useRef();

    useEffect(() => {
        const toggler = document.querySelector('.navbar-toggler');
        closer.current.onclick = function() { toggler.click() }
    }, []);

    return (
        <ul className="navbar-nav align-items-lg-center pt-2 p-lg-0 align-content-lg-center">

            <button type="button" ref={closer} className="white-iconic-btn-2 navbar-closer ms-auto mt-3 me-3 mb-4 d-lg-none">
                <i className="fa fa-times"></i>
            </button>

            <li className="nav-item me-lg-5">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/">
                    {t('navbarNav.menu01')}
                </NavLink>
            </li>

            <li className="nav-item me-lg-5 dropdown fl-dropdown-lg-hover fl-md-dropdown fl-not-dropdown-arrow">

                <a className="nav-link dropdown-toggle white-responsive-btn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('navbarNav.menu02')}
                    {/* <i className="fa fa-chevron-down ms-2 d-none d-lg-inline-block"></i> */}
                </a>
                
                <ul className="dropdown-menu border-0 rounded-0 py-0 px-4">
                
                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu01')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu02')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu03')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu04')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu05')}
                        </NavLink>
                    </li>

                </ul>

            </li>

            <li className="nav-item me-lg-5 dropdown fl-dropdown-lg-hover fl-md-dropdown fl-not-dropdown-arrow">

                <a className="nav-link dropdown-toggle white-responsive-btn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('navbarNav.menu03')}
                    {/* <i className="fa fa-chevron-down ms-2 d-none d-lg-inline-block"></i> */}
                </a>

                <ul className="dropdown-menu border-0 rounded-0 py-0 px-4">

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu06')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu07')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item white-responsive-btn-2" to="/">
                            {t('navbarNav.subMenu08')}
                        </NavLink>
                    </li>

                </ul>

            </li>

            <li className="nav-item me-lg-5">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/blog">
                    {t('navbarNav.menu04')}
                </NavLink>
            </li>

            <li className="nav-item me-lg-5">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/shop">
                    {t('navbarNav.menu05')}
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/elements">
                    {t('navbarNav.menu06')}
                </NavLink>
            </li>

            
        </ul> 
    )

}

export default NavbarNav;