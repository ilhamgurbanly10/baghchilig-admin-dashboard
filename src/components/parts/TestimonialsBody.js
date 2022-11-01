import SimpleSlider from '../sliders/SimpleSlider';
import Card05 from '../cards/Card05';
import { useDispatch , useSelector } from "react-redux";

const TestimonialsBody = () => {

    const datas = useSelector((state) => state.testimonials);

    return (
        <div className="testimonials-body mt-5 pt-3">
            
            <SimpleSlider>

                { datas?.map((data , i)=>(

                    <Card05 
                        key={i} 
                        img={data.img}
                        name={data.name}
                        comment={data.comment}
                        title={data.title}
                        place={data.place}
                        stars={data.stars}
                    />

                ))}

            </SimpleSlider>

        </div>
    )

}

export default TestimonialsBody;