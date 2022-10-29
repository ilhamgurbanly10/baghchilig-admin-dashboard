
import WhiteTitle from '../elements/titles/WhiteTitle';
import WhiteBtn from '../elements/buttons/WhiteBtn';
import WhiteIconicBtn from '../elements/buttons/WhiteIconicBtn';
import {useTranslation} from "react-i18next";

const MainFooter = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="main-footer d-flex mt-5 pt-4 pt-lg-5 w-100 justify-content-center justify-content-lg-between white-border-top border-lg-0">

            <div className="width-1 white-border-top pt-7 d-none d-lg-block">
                <WhiteTitle>
                    <strong>{t('titles.phone')}: </strong>
                    1-800-700-600
                </WhiteTitle>    
            </div>

            <div className="width-1 white-border-top pt-7 d-none d-lg-block">
                <WhiteTitle className="text-center">
                    <strong>{t('titles.mail')}: </strong>
                    info@bagciliq.com
                </WhiteTitle>    
            </div>

            <div className="width-1 white-border-top pt-7 d-none d-lg-flex justify-content-end align-items-center align-content-center">

                <WhiteTitle className="text-end">
                    <strong>{t('titles.socialMedia')}: </strong>
                </WhiteTitle>   

                <WhiteIconicBtn icon="linkedin" url="/" className="ms-3 me-3"/>

                <WhiteIconicBtn icon="instagram" url="/" className="me-3"/>

                <WhiteIconicBtn icon="twitter" url="/" className="me-3"/>

                <WhiteIconicBtn icon="facebook" url="/" className="me-3"/>

            </div>

            <WhiteBtn url="/about-us" className="d-lg-none btn-1-reverse py-6 px-5">
                {t('buttons.contactUs')}
            </WhiteBtn>

        </div>
    )

}

export default MainFooter;