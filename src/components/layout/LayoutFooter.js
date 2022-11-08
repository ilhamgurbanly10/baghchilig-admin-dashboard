
import { Layout } from 'antd';
import {useTranslation} from "react-i18next";
const { Footer } = Layout;

const LayoutFooter = () => {

  const {t, i18n} = useTranslation('common'); 

  return (
    <Footer
        style={{
          textAlign: 'center',
        }}
      > 
        {t('texts.copyright')}
    </Footer> 
  )

};

export default LayoutFooter;