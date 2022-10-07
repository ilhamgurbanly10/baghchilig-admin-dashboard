import React from 'react';
import Slider from "react-slick";

function SimpleCarousel2(props) {

    const {className, images} = props;

    var settings = {
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: "3000",
        appendDots: dots => (
            <div
              style={{
                bottom: "-35px"
              }}
            >
                <ul 
                    style={{ 
                        margin: "0px", 
                        display: "flex",
                        flexFlow: "row wrap", 
                        justifyContent: "space-between",
                        padding: '0' 
                    }}
                    > 
                    {dots} 
                </ul>
            </div>
        ),
        customPaging: i => (
            <div
              style={{
                width: "100%"
              }}
            >
              <img src={images[`aboutUsImg0${i + 1}`]} alt="" className="w-100 d-block slider-img-dot cover-img-3" />
            </div>
          )
    };

    return <Slider {...settings} className={`simple-carousel slider-spacing-sm slider-arrows-2 slider-img-dots ${className}`}>{props.children}</Slider> 
}
  
export default SimpleCarousel2;