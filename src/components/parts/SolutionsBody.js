import Card02 from '../cards/Card02';
import {useTranslation} from "react-i18next";

const SolutionsBody = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="solutions-body mt-5 pt-5 list-2 px-4 px-lg-0">
            
            <Card02 
                url="/" 
                icon="tree" 
                title={t('buttons.solutionsBtn02')}
                text={t('texts.solutionsText')}
            />

            <Card02 
                url="/" 
                icon="tint" 
                title={t('buttons.solutionsBtn03')}
                text={t('texts.solutionsText')}
            />

            <Card02 
                url="/" 
                icon="hand-paper-o" 
                title={t('buttons.solutionsBtn04')}
                text={t('texts.solutionsText')}
            />

            <Card02 
                url="/" 
                icon="cloud" 
                title={t('buttons.solutionsBtn05')}
                text={t('texts.solutionsText')}
            />

            <Card02 
                url="/" 
                icon="apple" 
                title={t('buttons.solutionsBtn06')}
                text={t('texts.solutionsText')}
            />

            <Card02 
                url="/" 
                icon="cubes" 
                title={t('buttons.solutionsBtn07')}
                text={t('texts.solutionsText')}
            />

        </div>
    )

}

export default SolutionsBody;