import GreenTitle from '../elements/titles/GreenTitle';
import GreyText from '../elements/texts/GreyText';
import WhiteBtn from '../elements/buttons/WhiteBtn';

const Card03 = (props) => {

    const {img, className, text, url, title, btnContent} = props;
    
    return (
        <div to={url} className={`card-03 p-4 p-lg-0 bg-green-till-lg text-center text-lg-start overflow-hidden d-flex flex-column flex-lg-row align-items-center align-items-lg-stretch justify-content-center justify-content-lg-start ${className}`}>
            
            <img src={img} alt="Image" className="small-img-2"/>

            <div className="bg-green flex-grow-1 d-flex flex-column flex-lg-row align-items-center align-content-center justify-content-center justify-content-lg-start">

                <div className="ms-lg-5 w-lg-60">
                    <GreenTitle className="font-14 text-white mt-4 mt-lg-0">{title}</GreenTitle>
                    <GreyText className="text-white font-6 mt-4 mt-lg-3">{text}</GreyText>
                </div>  

                <WhiteBtn url={url} className="btn-1-small ms-lg-auto me-lg-5 mt-4 mt-lg-0">
                    {btnContent}
                </WhiteBtn>

            </div>

        </div>
    )

}

export default Card03;