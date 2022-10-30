import { Link } from 'react-router-dom';

const VideoCard = (props) => {

    const {img, className, url} = props;
    
    return (
        <Link to={url} className={`video-card img-box-1 grow-img-on-hover play-icon overlay-on-hover ${className}`}>
            <img src={img} alt="Video Image" className="img-box-img" />
        </Link>
    )

}

export default VideoCard;