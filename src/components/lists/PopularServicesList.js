import {useTranslation} from "react-i18next";
import BlackTitle2 from '../elements/titles/BlackTitle2';
import GreyBtn from '../elements/buttons/GreyBtn';
import { Link } from "react-router-dom";

const PopularServicesList = (props) => {

    const {t, i18n} = useTranslation('common');

    const {className} = props;

    return (
        <div className={`popular-services-list d-flex flex-column ${className}`}>      

            <BlackTitle2 underline={true}>
                {t('titles.popularServices')}
            </BlackTitle2>

            <GreyBtn url="/" underline={true}>
                {t('buttons.solutionsBtn02')}
            </GreyBtn>

            <GreyBtn url="/" underline={true}>
                {t('buttons.solutionsBtn03')}
            </GreyBtn>

            <GreyBtn url="/" underline={true}>
                {t('buttons.solutionsBtn04')}
            </GreyBtn>

            <GreyBtn url="/" underline={true}>
                {t('buttons.solutionsBtn05')}
            </GreyBtn>
            
        </div>
    );
}
  
export default PopularServicesList;