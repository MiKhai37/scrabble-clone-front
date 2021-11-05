import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';

import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  UserOutlined,
  BarChartOutlined,
  DashboardOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
          <Title level={2} type='warning'>Web App Scrabble ({process.env.NODE_ENV})</Title>
        </Header>
        <Layout className="site-layout">
          <Content style={{ margin: '16px' }}>
            {children}
          </Content>
          <Sider>
            <SiderMenu />
          </Sider>
        </Layout>
        <Footer style={{ textAlign: 'center', backgroundColor: 'gray' }}>Web App Scrabble</Footer>
      </Layout>
    </>
  )
}

const SiderMenu = () => {

  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="login" icon={<LoginOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>

        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          <Link>Logout</Link>
        </Menu.Item>

        <Menu.Item key="signup" icon={<UserAddOutlined />}>
          <Link to="/signup">Sign Up</Link>
        </Menu.Item>

        <Menu.Item key="profile" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>

        <Menu.Item key="stats" icon={<BarChartOutlined />}>
          <Link to="/stats">Stats</Link>
        </Menu.Item>

        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="gameboard" icon={<PlayCircleOutlined />}>
          <Link to="/gameboard">Gameboard</Link>
        </Menu.Item>

      </Menu>
    </>
  )
}

export default MainLayout
