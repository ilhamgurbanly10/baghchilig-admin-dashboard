import { useState, useEffect } from 'react';
import GreyText from '../elements/texts/GreyText';
import GreyTitle from '../elements/titles/GreyTitle';

const Card05 = (props) => {

    const {img, name, title, comment, place, stars, className} = props;

    let [myStars, setMyStars] = useState([]);

    const uploadStars = () => {
        let newStars = [];
        for (let i = 0; i < stars; i++) { newStars.push(i); }
        setMyStars(newStars);
    }

    useEffect(() => {
        uploadStars();
    }, [])
    
    return (
        <div className={`card-05 px-4 py-5 grow-img-on-hover bg-lightgrey overflow-hidden d-flex flex-column justify-content-center align-items-center text-center ${className}`}>

            <img src={img} alt="Image" className="small-img-3 rounded-pill mt-4" />

            <GreyTitle className="mt-5">"{title}"</GreyTitle>

            <div className="stars d-flex mt-4">
                { myStars?.map((data , i)=>(   
                    <i className="fa fa-star font-10 color-green me-2" key={i}></i>
                ))}
            </div>

            <GreyText className="mt-4">{comment}</GreyText>

            <GreyTitle className="mt-4 pt-2 font-10">{name}</GreyTitle>

            <GreyText className="mt-3 mb-3">{place}</GreyText>

        </div>
    )

}

export default Card05;