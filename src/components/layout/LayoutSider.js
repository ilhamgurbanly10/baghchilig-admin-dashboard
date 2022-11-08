
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
import {useTranslation} from "react-i18next";

const { Sider } = Layout;

const LayoutSider = () => {

  const {t, i18n} = useTranslation('common');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      
      <img src={logo} alt="Logo" className="logo my-3 ms-3" style={{width: "130px", height: "auto"}}/>

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

        <Menu.Item key="1">
          <Link to={`/`} className="d-flex align-items-center">
            <HomeOutlined />
            <span>{t('menu.item01')}</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to={`/positions`} className="d-flex align-items-center">
            <UserOutlined />
            <span>{t('menu.item02')}</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="3">
          <Link to={`/team-members`} className="d-flex align-items-center">
            <TeamOutlined />
            <span>{t('menu.item03')}</span>
          </Link>
        </Menu.Item>

      </Menu> 

    </Sider>
  )

};

export default LayoutSider;