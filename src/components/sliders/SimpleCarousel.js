import React from 'react';
import Slider from "react-slick";

function SimpleCarousel(props) {

    const {className} = props;

    var settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: "3000"
    };

    return <Slider {...settings} className={`simple-carousel slider-spacing-sm slider-arrows ${className}`}>{props.children}</Slider> 
}
  
export default SimpleCarousel;