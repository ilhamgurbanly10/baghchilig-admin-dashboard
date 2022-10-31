import GreenTitle from '../elements/titles/GreenTitle';
import GreyText from '../elements/texts/GreyText';
import GreenBtn2 from '../elements/buttons/GreenBtn2';
import {useTranslation} from "react-i18next";

const TeamHeader = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="team-header text-center">  
            <GreenTitle className="font-lg-25">
                {t('titles.teamTitle')}
            </GreenTitle>
        </div>
    )

}

export default TeamHeader;