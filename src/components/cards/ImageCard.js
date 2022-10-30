import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ImageCard = (props) => {

    const {img, className, url, large} = props;
    
    return (
        <Link to={url} className={`img-card grow-img-on-hover search-icon overlay-on-hover ${className} ${large == 'true' ? 'img-box-2' : 'img-box-3'}`}>
            <img src={img} alt="Image" className="img-box-img" />
        </Link>
    )

}

export default ImageCard;