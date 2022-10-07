import SimpleSlider from '../sliders/SimpleSlider';
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import {SimplePost} from '../elements/Posts';
import i18next from "i18next";


const FeaturedWorkSlider = (props) => {

    const {t, i18n} = useTranslation('common');

    const lan = i18next.language;

    const {offers} = props;

    return (
        <section className="what-we-offer bigger-container mt-8 py-7 bg-lightgrey">
            
            <h3 className="what-we-offer-title yellow-underline underline-left border-bottom-lightgrey-3 grey-title">
                {t('titles.whatWeOffer')}
            </h3>

            <SimpleSlider className="mt-5">

                { offers.map((post , i)=>(

                    <SimplePost 
                        key={i} 
                        img={post.img}
                        name={post[`title_${lan}`]}
                        text={post[`text_${lan}`]}
                    />

                ))}

            </SimpleSlider>
            
        </section>
    )

}

const mapStateToProps = ({offers}) => {
    return {
        offers
    }
}

  
export default connect(mapStateToProps , null)(FeaturedWorkSlider)