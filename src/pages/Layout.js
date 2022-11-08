import LayoutHeader from '../components/layout/LayoutHeader';
import LayoutSider from '../components/layout/LayoutSider';
import LayoutFooter from '../components/layout/LayoutFooter';
import LayoutBreadcrumb from '../components/layout/LayoutBreadcrumb';
import LayoutChildren from '../components/layout/LayoutChildren';

import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
const { Content } = Layout;

const PageLayout = (props) => {

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >

      <LayoutSider/>

      <Layout className="site-layout">

        <LayoutHeader/>
        
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <LayoutBreadcrumb/>

          <LayoutChildren children={props.children}/>

        </Content>

        <LayoutFooter/>

      </Layout>

    </Layout>
  )
};

export default PageLayout;