import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import logo from '../assets/images/logo-2.png';



function Home() {

    const {t, i18n} = useTranslation('common');

    return (
      <div className="text-center">

        <Helmet>
          <title>{t('titles.pageName')} - {t('menu.item01')}</title>
        </Helmet>

        <img src={logo} alt="Logo" className="logo mt-3" style={{width: "300px", height: "auto"}}/>
        
        <h1 className="mt-5 color-blue">
          {t('titles.pageName')}
        </h1>

        <p className="mt-5 w-25 mx-auto">
          {t('texts.aboutUs')}
        </p>

      </div>  
    );

}
  
export default Home;