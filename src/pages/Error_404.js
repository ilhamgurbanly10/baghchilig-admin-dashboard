import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";

const Error_404 = () => {

    const {t, i18n} = useTranslation('body'); 

    return (
      <div className="error-404-text full-screen-text d-flex flex-column">
        
        <h1 className="mb-4">{t('texts.notFound')}</h1>
        
        <Link to="/" className="yellow-btn grow-on-hover">
          {t('links.backToHome')}
        </Link>

      </div>  
    );
}
  
export default Error_404;