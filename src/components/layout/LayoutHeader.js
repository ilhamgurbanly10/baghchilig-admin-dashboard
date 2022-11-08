
import { Layout } from 'antd';
import Languages from '../dropdowns/Languages';

const { Header } = Layout;

const LayoutHeader = () => {

  return (
    <Header
      className="site-layout-background text-end"
      style={{
        padding: "0 1rem",
      }}
      
    >
      <Languages placement="bottom"/>

    </Header>  
  )

};

export default LayoutHeader;