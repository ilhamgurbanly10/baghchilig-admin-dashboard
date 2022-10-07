import SimpleSlider from '../sliders/SimpleSlider';
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import {SimplePost2} from '../elements/Posts';
import i18next from "i18next";
import {bgImg01} from '../files/Images';


const FeaturedWorkSlider = (props) => {

    const {t, i18n} = useTranslation('common');

    const lan = i18next.language;

    const {featuredWork} = props;

    return (
        <section className="featured-work bigger-container mt-7 py-7 full-bg-img" style={{backgroundImage: `url(${bgImg01})`}}>
            
            <h3 className="featured-work-title yellow-underline underline-left grey-title white-color">
                {t('titles.featuredWork')}
            </h3>

            <SimpleSlider className="mt-5">

                { featuredWork.map((post , i)=>(

                    <SimplePost2 
                        key={i} 
                        img={post.img}
                        images={post.images}
                        name={post[`title_${lan}`]}
                        text={post[`text_${lan}`]}
                    />

                ))}

            </SimpleSlider>
            
        </section>
    )

}

const mapStateToProps = ({featuredWork}) => {
    return {
        featuredWork
    }
}

  
export default connect(mapStateToProps , null)(FeaturedWorkSlider)