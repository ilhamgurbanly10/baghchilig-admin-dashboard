import {bgImg02} from '../files/Images';
import {useTranslation} from "react-i18next";

const AwesomeFacts = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <section className="awesome-facts bigger-container py-7 full-bg-img grey-overlay d-flex flex-column align-items-center align-items-lg-end" style={{backgroundImage: `url(${bgImg02})`}}>
            
            <h3 className="awesome-facts-title position-relative layer-2 white-title mt-lg-4">
                {t('titles.company')}
            </h3>
            
            <h1 className="awesome-facts-sub-title mt-1 white-bigger-title position-relative layer-2">
                {t('titles.awesomeFacts')}
            </h1>

            <ul className="awesome-facts-list list-unstyled mb-lg-4 mt-4 position-relative layer-2 d-flex flex-column flex-lg-row justify-content-start aling-items-center">

                <li className="awesome-facts-item text-center me-lg-5">
                    <p className="awesome-facts-length bigger-white-title-2">14593<span className="yellow-color">+</span></p>
                    <p className="awesome-facts-inner-text white-text-2">
                        {t('texts.projectCompleted')}
                    </p>
                </li>

                <li className="awesome-facts-item text-center me-lg-5 mt-4 mt-lg-0">
                    <p className="awesome-facts-length bigger-white-title-2">18901<span className="yellow-color">+</span></p>
                    <p className="awesome-facts-inner-text white-text-2">
                        {t('texts.satisfiedClients')}
                    </p>
                </li>

                <li className="awesome-facts-item text-center mt-4 mt-lg-0">
                    <p className="awesome-facts-length bigger-white-title-2">995<span className="yellow-color">+</span></p>
                    <p className="awesome-facts-inner-text white-text-2">
                        {t('texts.workersEmployed')}
                    </p>
                </li>

            </ul>

        </section>
    )

}

export default AwesomeFacts;