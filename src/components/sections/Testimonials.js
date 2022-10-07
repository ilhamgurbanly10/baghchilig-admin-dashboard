import {OurPartners} from '../elements/Lists'
import {MainComments} from '../elements/Lists'

const Testimonials = () => {

    return (
        <section className="testimonials mt-7 bigger-container row gx-0 mx-auto">
            <OurPartners className="col-12 col-lg-6 pe-lg-3"/>
            <MainComments className="col-12 col-lg-6 ps-lg-3 mt-5 mt-lg-0"/>
        </section>
    )

}

export default Testimonials;