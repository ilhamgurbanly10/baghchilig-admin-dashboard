import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useEffect, useRef} from 'react';


const NavbarNav = (props) => {

    const {t, i18n} = useTranslation('header');

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

            <li className="nav-item me-lg-3">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/">
                    {t('menu.item1')}
                </NavLink>
            </li>

            <li className="nav-item me-lg-3 dropdown fl-dropdown-lg-hover fl-md-dropdown fl-not-dropdown-arrow">

                <a className="nav-link dropdown-toggle white-responsive-btn" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {t('menu.item2')}
                    <i className="fa fa-chevron-down ms-2 d-none d-lg-inline-block"></i>
                </a>
                
                <ul className="dropdown-menu border-0 rounded-0 p-0">
                
                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item1')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item2')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item3')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item4')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item5')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item6')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item7')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn" to="/">
                            {t('subMenu1.item8')}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="dropdown-item black-responsive-btn border-0" to="/">
                            {t('subMenu1.item9')}
                        </NavLink>
                    </li>

                </ul>

            </li>

            <li className="nav-item me-lg-3">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/gallery">
                {t('menu.item3')}
                </NavLink>
            </li>

            <li className="nav-item me-lg-3">
                <NavLink className={isActive => "nav-link white-responsive-btn " + (isActive.isActive ? " active" : "") } to="/about-us">
                {t('menu.item4')}
                </NavLink>
            </li>

            <li className="nav-item me-lg-3">
                <NavLink className={isActive => "nav-link white-responsive-btn" + (isActive.isActive ? " active" : "") } to="/blog">
                {t('menu.item5')}
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink className={isActive => "nav-link white-responsive-btn border-0" + (isActive.isActive ? " active" : "") } to="/contact">
                {t('menu.item6')}
                </NavLink>
            </li>

        </ul> 
    )

}

export default NavbarNav;