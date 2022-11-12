
import { Layout, Popconfirm, notification } from 'antd';
import {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Languages from '../dropdowns/Languages';
import { useDispatch , useSelector } from "react-redux";
import {logOutUser} from '../../redux/reducers/userSlice';
import {useTranslation} from "react-i18next";
import { CheckCircleFilled, WarningOutlined} from '@ant-design/icons';

const { Header } = Layout;

const LayoutHeader = () => {

  const {t, i18n} = useTranslation('common');
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {

    dispatch(logOutUser())
      .unwrap()
      .then((originalPromiseResult) => {
        successfullyLogout();
      })
      .catch((rejectedValueOrSerializedError) => {
        errorNotification();
      })

  }

  const successfullyLogout = () => {
    notification.open({
      message: t(`texts.successfullyLogout`),
      icon: <CheckCircleFilled style={{ color: '#2fee10' }} />,
    });
  }

  const errorNotification = () => {
    notification.open({
      message: t('texts.errorOccured'),
      icon: <WarningOutlined style={{ color: '#fc0f30' }} />,
    });
  }

  useEffect(() => {
    
    console.log(data.data[0].avatar);
    
  }, [])

  return (
    <Header
      className="site-layout-background d-flex justify-content-end align-items-center align-content-center"
      style={{
        padding: "0 1rem",
      }}
      
    > 

      <div className="user me-5 d-flex justify-content-start align-items-center align-content-center">

        <Link to="/user" className="d-inline-block">
          <img src={data.data[0].avatar} style={{width: "auto", height: "35px"}} className="rounded-pill btn-rotate" alt="Avatar" />
        </Link>

        <Link to="/user" className="d-inline-block ms-4 text-white grow-on-hover">
          {`${data.data[0].first_name} ${data.data[0].last_name}`}
        </Link>

        <Popconfirm
              title={t('texts.logoutConfirmation')}
              onConfirm={() => { logout() }}
              okText={t('texts.yes')}
              cancelText={t('texts.no')}
            >
              <button type="button" className="btn btn-danger ms-4">
                  {t('buttons.logout')}
              </button>
        </Popconfirm>

      </div>

      <Languages placement="bottom"/>

    </Header>  
  )

};

export default LayoutHeader;