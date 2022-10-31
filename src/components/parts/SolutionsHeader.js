import GreenTitle from '../elements/titles/GreenTitle';
import GreyText from '../elements/texts/GreyText';
import GreenBtn2 from '../elements/buttons/GreenBtn2';
import {useTranslation} from "react-i18next";

const SolutionsHeader = () => {

    const {t, i18n} = useTranslation('common');

    return (
        <div className="solutions-header row mx-auto w-100 gx-0 px-4 px-lg-0">
            
            <div className="solutions-container col-12 col-lg me-lg-2px">

                <GreenTitle>
                    {t('titles.solutionsTitle')}
                </GreenTitle>

                <GreenBtn2 className="mt-4" url="">
                    {t('buttons.solutionsBtn01')}
                </GreenBtn2>

            </div>  

            <div className="solutions-container col-12 col-lg ms-lg-2px mt-5 mt-lg-0">

                <GreyText>
                    {t('texts.aboutText')}
                </GreyText>

            </div>    

        </div>
    )

}

export default SolutionsHeader;