import ContactUsList from '../lists/ContactUsList';
import GreyText from '../elements/texts/GreyText';
import AboutUsList from '../lists/AboutUsList';
import PopularServicesList from '../lists/PopularServicesList';
import EmergencyServiceList from '../lists/EmergencyServiceList';
import Languages from "../dropdowns/Languages";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <footer className='footer mt-10rem container-main pt-5 row gx-0 mx-auto justify-content-between'>      

            <ContactUsList className="col-12 col-lg-3"/>
            <AboutUsList className="col-12 col-lg-2 mt-5 mt-lg-0"/>
            <PopularServicesList className="col-12 col-lg-3 mt-5 mt-lg-0"/>
            <EmergencyServiceList className="col-12 col-lg-2 mt-5 mt-lg-0"/>

            <div className="w-100 grey-border-top text-center text-lg-start py-3 mt-5 d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">
                
                <GreyText className="mb-3 mb-lg-0">
                    {t('texts.copyright')}
                </GreyText>

                <Languages placement="top"/>

            </div>
            
        </footer>
    );
}
  
export default Footer;