import GreenTitle from '../elements/titles/GreenTitle';
import GreyText from '../elements/texts/GreyText';
import GreenBtn from '../elements/buttons/GreenBtn';
import {useTranslation} from "react-i18next";

const AboutUsLeftSider = () => {

    const {t, i18n} = useTranslation('common');

    const lan = i18n.language;

    return (
        <div className="about-us-left-sider mt-lg-4 col-12 col-lg me-lg-2px">
            
            <GreenTitle>
                {t('titles.aboutTitle')}
            </GreenTitle>

            <GreyText className="mt-4 mb-2 pt-1">
                {t('texts.aboutText')}
            </GreyText>

            <GreenBtn className="mt-4" url="">
                {t('buttons.contactUs').toLocaleUpperCase(lan)}
            </GreenBtn>

        </div>
    )

}

export default AboutUsLeftSider;