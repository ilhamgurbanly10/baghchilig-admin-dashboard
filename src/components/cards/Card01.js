import { Link } from 'react-router-dom';
import GreyTitle from '../elements/titles/GreyTitle';

const Card01 = (props) => {

    const {img, className, text, url} = props;
    
    return (
        <Link to={url} className={`card-01 p-5 pt-2 bg-white grow-img-on-hover overflow-hidden text-center grey-border d-inline-block footer-box-shadow-on-hover ${className}`}>
            <img src={img} alt="Image" className="small-img" />
            <GreyTitle className="card-01-text position-relative fl-layer-2 mt-4">{text}</GreyTitle>
        </Link>
    )

}

export default Card01;