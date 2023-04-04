import React from 'react';
import {
  Layout,
} from 'antd';
import NavBar from './NavBar';

import '../utils/styles/Layout.css';

const { Content } = Layout;

function CustomLayout({ children }) {
  return (
    <Layout className='Layout'>
      <NavBar/>
      <Content className='Content'>
        {children}
      </Content>
    </Layout>
  );
}

export default CustomLayout;