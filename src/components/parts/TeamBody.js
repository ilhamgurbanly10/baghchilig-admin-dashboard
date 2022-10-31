import BlackTitle from '../elements/titles/BlackTitle';
import GreyText from '../elements/texts/GreyText';
import GreenBtn2 from '../elements/buttons/GreenBtn2';
import {teamImg01, teamImg06} from '../files/Images';
import {useTranslation} from "react-i18next";

const TeamBody = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="team-body mt-5 pt-3 row gx-0 mx-auto align-items-center align-content-center">

            <div className="col-12 col-lg me-lg-2px pe-lg-5">
                <img src={teamImg01} alt="Image" className="w-100 h-auto" />
            </div> 

            <div className="col-12 col-lg ms-lg-2px mt-5 mt-lg-0">

                <BlackTitle>
                    {t('titles.teamText')}
                </BlackTitle>

                <GreyText className="mt-4">
                    {t('titles.teamTitle02')}
                </GreyText>

                <img src={teamImg06} alt="Image" className="mt-4" />

            </div> 
           
        </div>
    )

}

export default TeamBody;