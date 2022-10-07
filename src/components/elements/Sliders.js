import {useTranslation} from "react-i18next";
import SimpleCarousel2 from '../sliders/SimpleCarousel2';
import Images from '../files/Images';
import '../../assets/css/flash/lightbox.css';
import flashLightbox from '../../assets/js/flash/lightbox.js';
import React, {useEffect, useRef} from 'react';

export const AboutUsSlider = (props) => {

    const {className} = props;

    const {t, i18n} = useTranslation('common');

    const lightboxShower = useRef();
    const sliderBox = useRef();

    useEffect(() => { 
        flashLightbox(sliderBox.current);
        const hiddenShowerBtn = sliderBox.current.querySelector('.fl-lightbox-btn');
        lightboxShower.current.onclick = function() { hiddenShowerBtn.click(); }
    }, []);

    return (
        <div className={`about-us ${className}`}>
            
            <h3 className="about-us-title yellow-underline underline-left border-bottom-lightgrey-3 grey-title">
                {t('titles.aboutUs')}
            </h3>

            <div className="about-us-slider-box show-iconic-btn-on-hover-parent position-relative" ref={sliderBox}>

                <button type="button" className="about-us-lightbox-shower-btn show-iconic-btn-on-hover white-iconic-btn darkgrey-color position-absolute top-1 right-1 white-color-on-hover layer-2" ref={lightboxShower}>
                    <i className="fa fa-arrows-alt"></i>
                </button>

                <div className="fl-lightbox-btn d-none"></div>
                <div className="fl-lightbox-btn d-none"></div>
                <div className="fl-lightbox-btn d-none"></div>
                <div className="fl-lightbox-btn d-none"></div>
            
                <SimpleCarousel2 className="about-us-slider mt-5" images={Images} >
                
                    <img src={Images.aboutUsImg01} alt="About Us Img" className="about-us-slide-img cover-img-2 fl-lightbox-img" />
                    <img src={Images.aboutUsImg02} alt="About Us Img" className="about-us-slide-img cover-img-2 fl-lightbox-img" />
                    <img src={Images.aboutUsImg03} alt="About Us Img" className="about-us-slide-img cover-img-2 fl-lightbox-img" />
                    <img src={Images.aboutUsImg04} alt="About Us Img" className="about-us-slide-img cover-img-2 fl-lightbox-img" />

                </SimpleCarousel2>

            </div>    

        </div>
    )

}
