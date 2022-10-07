import { Carousel } from 'antd';
import React from 'react';

const MyCarousel = (props) => {
  
  const updateLine = () => {
    const line = document.querySelector('.slider-progress-line');
    line.classList.remove('show');
    setTimeout(function() { line.classList.add('show');}, 10)
  }

  return (
    <Carousel autoplay dots={false} autoplaySpeed={6000} pauseOnHover={false} beforeChange={() => { updateLine(); }}>{props.children}</Carousel>
  )

}

export default MyCarousel;