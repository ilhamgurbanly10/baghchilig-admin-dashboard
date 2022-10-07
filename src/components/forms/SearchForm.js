import {useEffect, useRef, useState} from 'react';
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const SearchForm = () => {

    const {t, i18n} = useTranslation('header');
    const [formIsShown, showForm] = useState(false);

    const toggler = useRef();
    const form = useRef();

    const toggleForm = () => {
        form.current.classList.contains('show') ? showForm(false) : showForm(true); 
    }

    const hideForm = () => showForm(false);

    const stop = (event) => event.stopPropagation();

    let [searchParams, setSearchParams] = useSearchParams();

    const writeToUrl = event => {
        let val = document.querySelector('#searchText').value;
        setSearchParams(`name=${val}`);
    }

    useEffect(() => {
        document.addEventListener('click', function() { hideForm() })
    }, []);

    return (
        <div className="search-form-container d-none d-lg-block position-relative">

            <button type="button" onClick={(event) => { toggleForm(); stop(event); }} className={`search-form-toggler white-iconic-btn ms-4 yellow-color-on-hover rotate-icon me-3 ${formIsShown ? 'active' : ''}`}>
                <i className={`fa fa-${formIsShown ? 'times' : 'search'}`}></i>
            </button>

            <form className={`search-form ${formIsShown ? 'show' : ''}`} onClick={(event) => { stop(event); }} ref={form}>

                <div className="search-form-group position-relative m-2">

                    <input type="text" onChange={writeToUrl} className="search-form-input input-1" name="searchText" id="searchText" placeholder={t('search.placeholder',)} />

                    <Link to="/results" className="search-form-btn search-form-submit white-iconic-btn yellow-color rotate-icon">
                        <i className="fa fa-search"></i>
                    </Link>

                </div>    

            </form>  
        </div>     
    );

}

export default SearchForm;