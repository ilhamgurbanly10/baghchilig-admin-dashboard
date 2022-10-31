import { Link } from 'react-router-dom';
import WhiteTitle from '../elements/titles/WhiteTitle';
import GreyText from '../elements/texts/GreyText';
import WhiteIconicBtn2 from '../elements/buttons/WhiteIconicBtn2';

const Card04 = (props) => {

    const {img, facebook, instagram, twitter, className, text, name} = props;
    
    return (
        <div className={`card-04 p-3 grow-img-on-hover overflow-hidden img-box-4 text-center position-relative d-inline-block green-box-on-hover ${className}`}>

            <img src={img} alt="Image" className="img-box-img position-absolute top-0 start-0" />
            
            <div className="green-box">

                <WhiteTitle>{name}</WhiteTitle>
                <GreyText className="mt-3 text-white">{text}</GreyText>

                <div className="btn-list d-flex mt-4">
                    <WhiteIconicBtn2 icon="instagram" url={instagram} className="me-2"/>
                    <WhiteIconicBtn2 icon="twitter" url={twitter} className="me-2"/>
                    <WhiteIconicBtn2 icon="facebook" url={facebook}/>
                </div>

            </div>

        </div>
    )

}

export default Card04;