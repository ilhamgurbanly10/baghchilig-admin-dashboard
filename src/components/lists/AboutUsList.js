import {useTranslation} from "react-i18next";
import BlackTitle2 from '../elements/titles/BlackTitle2';
import GreyBtn from '../elements/buttons/GreyBtn';
import { Link } from "react-router-dom";

const AboutUsList = (props) => {

    const {t, i18n} = useTranslation('common');

    const {className} = props;

    return (
        <div className={`about-us-list d-flex flex-column ${className}`}>      

            <BlackTitle2 underline={true}>
                {t('titles.aboutUs')}
            </BlackTitle2>

            <GreyBtn url="/" underline={true}>
                {t('navbarNav.menu01')}
            </GreyBtn>

            <GreyBtn url="/" underline={true}>
                {t('navbarNav.menu02')}
            </GreyBtn>

            <GreyBtn url="/" underline={true}>
                {t('navbarNav.menu04')}
            </GreyBtn>

            <GreyBtn url="/" underline={true}>
                {t('navbarNav.menu05')}
            </GreyBtn>
            
        </div>
    );
}
  
export default AboutUsList;