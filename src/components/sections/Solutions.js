import SolutionsHeader from '../parts/SolutionsHeader';
import SolutionsBody from '../parts/SolutionsBody';
import SolutionsFooter from '../parts/SolutionsFooter';

const AboutUs = () => {

    return (
        <section className="solutions mt-6rem py-6rem container-lg-main bg-yellow d-flex flex-column">
            <SolutionsHeader/> 
            <SolutionsBody/> 
            <SolutionsFooter/>     
        </section>
    )

}

export default AboutUs;