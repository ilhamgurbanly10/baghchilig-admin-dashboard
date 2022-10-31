import AboutUsLeftSider from '../parts/AboutUsLeftSider';
import AboutUsRightSider from '../parts/AboutUsRightSider';

const AboutUs = () => {

    return (
        <section className="about-us mt-5 pt-5 container-main row mx-auto gx-0 align-items-center align-content-center">
            <AboutUsLeftSider/>
            <AboutUsRightSider/>      
        </section>
    )

}

export default AboutUs;