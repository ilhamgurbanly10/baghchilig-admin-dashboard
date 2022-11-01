import { Button, Dropdown, Menu } from 'antd';
import {useTranslation} from "react-i18next";

const Languages = (props) => {
    
    const {t, i18n} = useTranslation('common');

    const {placement} = props;

    const changeLan = (lan) => {
        i18n.changeLanguage(lan);
        localStorage.setItem('locale', lan);
    }

    const locale = localStorage.getItem('locale').toUpperCase();
    
    const langueageButtons = (
      <Menu
        items={[
          {
            key: '1',
            label: (
                <button onClick={() => { changeLan('az') }} className="btn btn-success mt-2 mb-2">AZ</button>
            ),
          },
          {
            key: '2',
            label: (
                <button onClick={() => { changeLan('de') }} className="btn btn-success mb-2">DE</button>
            ),
          },
          {
            key: '3',
            label: (
                <button onClick={() => { changeLan('en') }} className="btn btn-success">EN</button>
            ),
          },
        ]}
      />
    );


    return (
        <>   
            <Dropdown
                overlay={langueageButtons}
                placement={placement}
                arrow={{
                    pointAtCenter: true,
                }}
            >
                <Button>{locale}</Button>
            </Dropdown>   
        </>
    ) 

}

export default Languages;