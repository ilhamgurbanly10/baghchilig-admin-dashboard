import { Link } from 'react-router-dom';
import GreenTitle from '../elements/titles/GreenTitle';
import GreyText from '../elements/texts/GreyText';

const Card02 = (props) => {

    const {icon, className, text, url, title} = props;
    
    return (
        <Link to={url} className={`card-02 p-4 overflow-hidden d-inline-block footer-box-shadow-on-hover color-style-on-hover ${className}`}>
            <i className={`fa fa-${icon} color-green font-20 mb-2`}></i>
            <GreenTitle className="mt-4 font-11">{title}</GreenTitle>
            <GreyText className="mt-4">{text}</GreyText>
        </Link>
    )

}

export default Card02;