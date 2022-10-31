import Images from '../files/Images';
import ImageCard from '../cards/ImageCard';
import { useRef, useEffect } from 'react';
import flashLightbox from '../../assets/js/flash/lightbox.js';
import '../../assets/css/flash/lightbox.css';

const MediaImages = () => {

    const lightbox = useRef();

    useEffect(() => {
        flashLightbox(lightbox.current)
    }, [])

    return (
        <div className="media-images mt-5px list-1" ref={lightbox}>
            <ImageCard img={Images.mediaImg03} large="false" className="fl-lightbox-img fl-lightbox-btn"/>
            <ImageCard img={Images.mediaImg04} large="true" className="fl-lightbox-img fl-lightbox-btn"/>
            <ImageCard img={Images.mediaImg05} large="false" className="fl-lightbox-img fl-lightbox-btn"/>
            <ImageCard img={Images.mediaImg06} large="true" className="fl-lightbox-img fl-lightbox-btn"/>
        </div>
    )

}

export default MediaImages;