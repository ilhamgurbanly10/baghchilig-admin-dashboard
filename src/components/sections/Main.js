import {mainBgImg} from '../files/Images';
import WhiteBiggerTitle from '../elements/titles/WhiteBiggerTitle';
import WhiteBtn from '../elements/buttons/WhiteBtn';
import {useTranslation} from "react-i18next";

const Main = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <main className="main fl-bg-img-center fl-black-overlay  w-100 vh-100 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage: `url(${mainBgImg})`}}>
            

            <div className="main-container p-5 d-flex flex-column align-items-center position-relative fl-layer-2">

                <WhiteBiggerTitle>
                    {t('titles.title01')}
                </WhiteBiggerTitle>

                <div className="pt-3 my-5 d-flex flex-column flex-lg-row align-items-center justify-content-center">

                    <WhiteBtn url="/about-us" className="me-lg-4 btn-1-reverse">
                        {t('buttons.aboutUs')}
                    </WhiteBtn>

                    <WhiteBtn url="/about-us" className="mt-4 mt-lg-0">
                        {t('buttons.freeQuote')}
                    </WhiteBtn>

                </div>

                <div className="main-footer d-flex mt-5 pt-5 w-100 justify-content-center justify-content-lg-between white-border-top border-lg-0">

                    <WhiteBtn url="/about-us" className="d-lg-none btn-1-reverse py-6 px-5">
                        {t('buttons.contactUs')}
                    </WhiteBtn>

                </div>
                
            </div>
            
            
        </main>
    )

}

export default Main;