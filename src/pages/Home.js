import HeadSlider from '../components/sections/HeadSlider';
import MainServices from '../components/sections/MainServices';
import FeaturedWorkSlider from '../components/sections/FeaturedWork';
import AboutUs from '../components/sections/AboutUs';
import OfferingSlider from '../components/sections/OfferingSlider';
import AwesomeFacts from '../components/sections/AwesomeFacts';
import Testimonials from '../components/sections/Testimonials';


function Home() {
    return (
      <>
        <HeadSlider/>
        <MainServices/>
        <FeaturedWorkSlider/>
        <AboutUs/>
        <OfferingSlider/>
        <AwesomeFacts/>
        <Testimonials/>
      </>  
    );
}
  
export default Home;