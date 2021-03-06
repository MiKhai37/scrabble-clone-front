import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Typography } from 'antd';
import AuthContext from '../Contexts/authContext';

import {
  HomeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  DashboardOutlined,
  PlayCircleOutlined,
  CommentOutlined
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const MainLayout = ({ children }) => {
  const authContext = useContext(AuthContext)

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
          <Title level={2} type='warning'>Web App Scrabble</Title>
        </Header>
        <Layout className="site-layout">
          <Content style={{ margin: '16px' }}>
            {children}
          </Content>
          <Sider>
            {authContext.isLoggedIn
              ?
              <AuthSiderMenu />
              :
              <SiderMenu />}
          </Sider>
        </Layout>
        <Footer style={{ textAlign: 'center', backgroundColor: 'gray' }}>Web App Scrabble</Footer>
      </Layout>
    </>
  )
}

const AuthSiderMenu = () => {
  const authContext = useContext(AuthContext)
  return (
    <>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="gameboard" icon={<PlayCircleOutlined />}>
          <Link to="/gameboard">Gameboard</Link>
        </Menu.Item>

        <Menu.Item key="socket" icon={<CommentOutlined />}>
          <Link to="/socket">Socket</Link>
        </Menu.Item>

        <Menu.Item key="logout" onClick={() => authContext.logout()} icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>

      </Menu>
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

        <Menu.Item key="signup" icon={<UserAddOutlined />}>
          <Link to="/signup">Sign Up</Link>
        </Menu.Item>

      </Menu>
    </>
  )
}

export default MainLayout
