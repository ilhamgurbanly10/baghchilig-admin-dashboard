import Images from '../files/Images';
import {useTranslation} from "react-i18next";
import Card01 from '../cards/Card01';

const AboutUsRightSider = () => {

    const {t, i18n} = useTranslation('common'); 
    
    return (
        <div className="about-us-right-sider mt-5 mt-lg-4 col-12 col-lg mx-0 ms-lg-2px w-100 row justify-content-between">
             
             <Card01 img={Images.aboutUsImg01} url="/" text={t('buttons.aboutBtn01')} className="col-12 col-lg me-lg-3"/>
             <Card01 img={Images.aboutUsImg02} url="/" text={t('buttons.aboutBtn02')} className="col-12 col-lg mt-2rem mt-lg-0 ms-lg-3"/>
             <div className="w-100"></div>
             <Card01 img={Images.aboutUsImg03} url="/" text={t('buttons.aboutBtn03')} className="col-12 col-lg mt-2rem me-lg-3"/>
             <Card01 img={Images.aboutUsImg04} url="/" text={t('buttons.aboutBtn04')} className="col-12 col-lg mt-2rem ms-lg-3"/>

        </div>
    )

}

export default AboutUsRightSider;