import { Carousel } from 'antd';
import React from 'react';

const MyCarousel = (props) => (
  <Carousel autoplay dots={false} autoplaySpeed={6000} pauseOnHover={false}>{props.children}</Carousel>
);

export default MyCarousel;