import Images from '../files/Images';
import Card04 from '../cards/Card04';
import {useTranslation} from "react-i18next";

const TeamFooter = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="team-footer mt-5 row mx-auto gx-0 align-items-center align-content-center">  
           
           <div className="col-12 col-lg me-lg-2px pe-lg-5">
                <img src={Images.bigIcon} alt="Brand"  className="w-100 h-auto" />
           </div>

            <div className="col-12 col-lg mt-5 mt-lg-0 mx-0 ms-lg-2px w-100 row justify-content-between">
                
                <Card04 
                    img={Images.teamImg02} 
                    facebook="/"
                    instagram="/"
                    twitter="/" 
                    text={t('titles.founder')} 
                    name="Aysu Gurbanly"
                    className="col-12 col-lg me-lg-3"
                />

                <Card04 
                    img={Images.teamImg03} 
                    facebook="/"
                    instagram="/"
                    twitter="/" 
                    text={t('titles.gardener')} 
                    name="Aysel Gurbanly"
                    className="col-12 col-lg mt-2rem mt-lg-0 ms-lg-3"
                />

                <div className="w-100"></div>

                <Card04 
                    img={Images.teamImg04} 
                    facebook="/"
                    instagram="/"
                    twitter="/" 
                    text={t('titles.founder')} 
                    name="Ilham Gurbanly"
                    className="col-12 col-lg mt-2rem me-lg-3"
                />

                <Card04  
                    img={Images.teamImg05} 
                    facebook="/"
                    instagram="/"
                    twitter="/" 
                    text={t('titles.gardener')} 
                    name="Ilham Gurbanly"
                    className="col-12 col-lg mt-2rem ms-lg-3"
                />

            </div>

        </div>
    )

}

export default TeamFooter;