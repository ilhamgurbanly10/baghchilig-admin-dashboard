import Main from '../components/sections/Main';
import Media from '../components/sections/Media';
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";



function Home() {

    const {t, i18n} = useTranslation('common');

    return (
      <>

        <Helmet>
            <title>Bağçılıq - {t('pages.home')}</title>
        </Helmet>

        <Main/>
        <Media/>
        
      </>  
    );

}
  
export default Home;