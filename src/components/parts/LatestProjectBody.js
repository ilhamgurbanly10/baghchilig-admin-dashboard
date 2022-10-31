import {latestProjectImg01, latestProjectImg02} from '../files/Images';
import LineBtn from '../elements/buttons/LineBtn';
import { useRef, useEffect } from 'react';
import resizableImages from '../../assets/js/resizable-images.js';
import {useTranslation} from "react-i18next";

const LatestProjectBody = () => {

    const {t, i18n} = useTranslation('common');

    const resizableImagesEl = useRef();

    useEffect(() => {
        resizableImages(resizableImagesEl.current)
    }, [])

    return (
        <div className="latest-project-body mt-6rem">
            
            <div className="resizable-images position-relative img-box-5" ref={resizableImagesEl}>

                <img src={latestProjectImg01} alt="Img" className="position-absolute fl-layer-1 top-0 start-0 img-box-img" />

                <div className="resizable-images-container img-box-5 overflow-visible position-absolute top-0 start-0 fl-layer-2">
                    
                    <LineBtn className="resizable-images-btn"/>
                     
                    <div className="overflow-hidden w-100 h-100">
                        <img src={latestProjectImg02} alt="Img" className="img-box-img-2" /> 
                    </div>

                </div>

            </div>

        </div>
    )

}

export default LatestProjectBody;