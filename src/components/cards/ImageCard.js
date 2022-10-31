import { useEffect } from 'react';

const ImageCard = (props) => {

    const {img, className, large} = props;
    
    return (
        <div className={`img-card grow-img-on-hover search-icon overlay-on-hover ${className} ${large == 'true' ? 'img-box-2' : 'img-box-3'}`}>
            <img src={img} alt="Image" className="img-box-img" />
        </div>
    )

}

export default ImageCard;