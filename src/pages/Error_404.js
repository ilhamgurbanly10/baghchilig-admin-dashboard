import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";


const Error_404 = () => {

    const {t, i18n} = useTranslation('common'); 

    return (
      <div className="error-404-text fl-full-screen-text flex-column">
        
        <h1 className="mb-4">404</h1>
        <h1 className="mb-4">{t('texts.notFound')}</h1>
        
        <Link to="/" className="mt-4 btn btn-danger py-2">
          {t('buttons.backToHome')}
        </Link>

      </div>  
    );
}
  
export default Error_404;