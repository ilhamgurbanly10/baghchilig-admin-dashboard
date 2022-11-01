import {useTranslation} from "react-i18next";
import BlackTitle2 from '../elements/titles/BlackTitle2';
import GreyTextWithIcon from '../elements/texts/GreyTextWithIcon';

const EmergencyServiceList = (props) => {

    const {t, i18n} = useTranslation('common');

    const {className} = props;

    return (
        <div className={`emergency-service-list ${className}`}>      

            <BlackTitle2 underline={true}>
                {t('titles.emergencyService')}
            </BlackTitle2>

            <GreyTextWithIcon icon="mobile font-13 top-0" className="mt-3 font-8">
                1-800-700-600
            </GreyTextWithIcon>
            
        </div>
    );
}
  
export default EmergencyServiceList;