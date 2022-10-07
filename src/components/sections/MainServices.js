import {useTranslation} from "react-i18next";
import { Link } from "react-router-dom";

const MainServices = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <section className="main-services bigger-container mt-5 pt-4" id="mainServices">
            
            <h3 className="main-services-main-title yellow-underline grey-title text-center">
                {t('titles.mainServices')}
            </h3>

            <div className="main-services-list list-1 mt-5 pt-2 row flex-wrap gx-0 w-100 mx-auto">

                <div className="main-services-item yellow-icon-box-parent d-flex justify-content-start align-items-start flex-wrap">

                    <div className="main-services-icon-box yellow-icon-box">
                        <i className="fa fa-pencil yellow-icon-box-icon yellow-icon-box-hidden-icon"></i>
                        <i className="fa fa-pencil yellow-icon-box-icon"></i>
                    </div>

                    <div className="main-services-inner-container small-width ps-4">

                        <Link to="/" className="main-services-title black-btn bigger-font">
                            {t('titles.mainServicesTitle01')}
                        </Link>

                        <p className="main-services-text grey-text mt-2">
                            {t('texts.mainServicesText')}
                        </p>

                    </div>

                </div>

                <div className="main-services-item yellow-icon-box-parent d-flex justify-content-start align-items-start flex-wrap">

                    <div className="main-services-icon-box yellow-icon-box">
                        <i className="fa fa-home yellow-icon-box-icon yellow-icon-box-hidden-icon"></i>
                        <i className="fa fa-home yellow-icon-box-icon"></i>
                    </div>

                    <div className="main-services-inner-container small-width ps-4">

                        <Link to="/" className="main-services-title black-btn bigger-font">
                            {t('titles.mainServicesTitle02')}
                        </Link>

                        <p className="main-services-text grey-text mt-2">
                            {t('texts.mainServicesText')}
                        </p>

                    </div>

                </div>  

                <div className="main-services-item yellow-icon-box-parent d-flex justify-content-start align-items-start flex-wrap">

                    <div className="main-services-icon-box yellow-icon-box">
                        <i className="fa fa-bolt yellow-icon-box-icon yellow-icon-box-hidden-icon"></i>
                        <i className="fa fa-bolt yellow-icon-box-icon"></i>
                    </div>

                    <div className="main-services-inner-container small-width ps-4">

                        <Link to="/" className="main-services-title black-btn bigger-font">
                            {t('titles.mainServicesTitle03')}
                        </Link>

                        <p className="main-services-text grey-text mt-2">
                            {t('texts.mainServicesText')}
                        </p>

                    </div>

                </div>    

                <div className="main-services-item yellow-icon-box-parent d-flex justify-content-start align-items-start flex-wrap">

                    <div className="main-services-icon-box yellow-icon-box">
                        <i className="fa fa-building yellow-icon-box-icon yellow-icon-box-hidden-icon"></i>
                        <i className="fa fa-building yellow-icon-box-icon"></i>
                    </div>

                    <div className="main-services-inner-container small-width ps-4">

                        <Link to="/" className="main-services-title black-btn bigger-font">
                            {t('titles.mainServicesTitle04')}
                        </Link>

                        <p className="main-services-text grey-text mt-2">
                            {t('texts.mainServicesText')}
                        </p>

                    </div>

                </div>

                <div className="main-services-item yellow-icon-box-parent d-flex justify-content-start align-items-start flex-wrap">

                    <div className="main-services-icon-box yellow-icon-box">
                        <i className="fa fa-building-o yellow-icon-box-icon yellow-icon-box-hidden-icon"></i>
                        <i className="fa fa-building-o yellow-icon-box-icon"></i>
                    </div>

                    <div className="main-services-inner-container small-width ps-4">

                        <Link to="/" className="main-services-title black-btn bigger-font">
                            {t('titles.mainServicesTitle05')}
                        </Link>

                        <p className="main-services-text grey-text mt-2">
                            {t('texts.mainServicesText')}
                        </p>

                    </div>

                </div>

                <div className="main-services-item yellow-icon-box-parent d-flex justify-content-start align-items-start flex-wrap">

                    <div className="main-services-icon-box yellow-icon-box">
                        <i className="fa fa-tint yellow-icon-box-icon yellow-icon-box-hidden-icon"></i>
                        <i className="fa fa-tint yellow-icon-box-icon"></i>
                    </div>

                    <div className="main-services-inner-container small-width ps-4">

                        <Link to="/" className="main-services-title black-btn bigger-font">
                            {t('titles.mainServicesTitle06')}
                        </Link>

                        <p className="main-services-text grey-text mt-2">
                            {t('texts.mainServicesText')}
                        </p>

                    </div>

                </div>                                                                                     
              
            </div>

        </section>
    )

}

export default MainServices;