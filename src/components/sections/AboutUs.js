import {WhyChooseUs} from '../elements/Lists'
import {AboutUsSlider} from '../elements/Sliders'
import {connect} from 'react-redux';

const AboutUs = (props) => {

    const {whyChooseUs} = props;

    return (
        <section className="testimonials mt-7 bigger-container row gx-0 mx-auto">
            <WhyChooseUs className="col-12 col-lg-6 pe-lg-6" list={whyChooseUs}/>
            <AboutUsSlider className="col-12 col-lg-6 mt-5 mt-lg-0"/>
        </section>
    )

}

const mapStateToProps = ({whyChooseUs}) => {
    return {
        whyChooseUs
    }
}

  
export default connect(mapStateToProps , null)(AboutUs)