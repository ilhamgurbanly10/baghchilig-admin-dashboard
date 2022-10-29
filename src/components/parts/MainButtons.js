
import WhiteBtn from '../elements/buttons/WhiteBtn';
import {useTranslation} from "react-i18next";

const MainButtons = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="pt-3 pb-5 my-5 d-flex flex-column flex-lg-row align-items-center justify-content-center">

            <WhiteBtn url="/about-us" className="me-lg-4 btn-1-reverse">
                {t('buttons.aboutUs')}
            </WhiteBtn>

            <WhiteBtn url="/about-us" className="mt-4 mt-lg-0">
                {t('buttons.freeQuote')}
            </WhiteBtn>

        </div>
    )

}

export default MainButtons;