import GreenTitle from '../elements/titles/GreenTitle';
import {useTranslation} from "react-i18next";

const TestimonialsHeader = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="testimonials-header text-center">  
            <GreenTitle className="font-lg-25">
                {t('titles.testimonials')}
            </GreenTitle>
        </div>
    )

}

export default TestimonialsHeader;