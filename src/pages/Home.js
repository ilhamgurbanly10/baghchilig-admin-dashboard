import Main from '../components/sections/Main';
import Media from '../components/sections/Media';
import AboutUs from '../components/sections/AboutUs';
import Solutions from '../components/sections/Solutions';
import Team from '../components/sections/Team';
import LatestProject from '../components/sections/LatestProject';
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
        <AboutUs/>
        <Solutions/>
        <Team/>
        <LatestProject/>
        
      </>  
    );

}
  
export default Home;