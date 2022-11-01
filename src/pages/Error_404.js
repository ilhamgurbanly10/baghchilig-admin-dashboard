import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
import GreenBtn from '../components/elements/buttons/GreenBtn';

const Error_404 = () => {

    const {t, i18n} = useTranslation('common'); 

    return (
      <div className="error-404-text fl-full-screen-text flex-column">
        
        <h1 className="mb-4">{t('texts.notFound')}</h1>
        
        <GreenBtn className="mt-4" url="">
          {t('buttons.backToHome')}
        </GreenBtn>

      </div>  
    );
}
  
export default Error_404;