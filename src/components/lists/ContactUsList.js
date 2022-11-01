import {useTranslation} from "react-i18next";
import BlackTitle2 from '../elements/titles/BlackTitle2';
import GreyTextWithIcon from '../elements/texts/GreyTextWithIcon';

const ContactUsList = (props) => {

    const {t, i18n} = useTranslation('common');

    const {className} = props;

    return (
        <div className={`contact-us-list ${className}`}>      

            <BlackTitle2 underline={true}>
                {t('titles.contactUs')}
            </BlackTitle2>

            <GreyTextWithIcon icon="phone" className="mt-3">
                1-800-700-600
            </GreyTextWithIcon>

            <GreyTextWithIcon icon="envelope" className="mt-3">
                info@bagciliq.com
            </GreyTextWithIcon>

            <GreyTextWithIcon icon="map-marker" className="mt-3">
                60 East Side 65th Street, Baku City, NY 10065
            </GreyTextWithIcon>
            
        </div>
    );
}
  
export default ContactUsList;