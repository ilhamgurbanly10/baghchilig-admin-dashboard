import {mainBgImg} from '../files/Images';
import WhiteBiggerTitle from '../elements/titles/WhiteBiggerTitle';
import MainFooter from '../parts/MainFooter';
import MainButtons from '../parts/MainButtons';
import {useTranslation} from "react-i18next";

const Main = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <main className="main container-main bg-green fl-bg-img-center fl-black-overlay w-100 vh-100 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage: `url(${mainBgImg})`}}>
            
            <div className="main-container py-7 w-100 d-flex flex-column align-items-center position-relative fl-layer-2">
                
                <WhiteBiggerTitle>{t('titles.title01')}</WhiteBiggerTitle>
                <MainButtons/>
                <MainFooter/>

            </div>
               
        </main>
    )

}

export default Main;