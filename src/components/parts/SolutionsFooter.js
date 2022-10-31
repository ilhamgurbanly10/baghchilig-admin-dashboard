import Card03 from '../cards/Card03';
import {img01} from '../files/Images';
import {useTranslation} from "react-i18next";

const SolutionsFooter = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="solutions-footer mt-5 pt-5">
            
            <Card03
                img={img01}
                title={t('titles.solutionsTitle02')}
                text={t('texts.solutionsText02')}
                btnContent={t('buttons.readMore')}
                url="/"

            />

        </div>
    )

}

export default SolutionsFooter;