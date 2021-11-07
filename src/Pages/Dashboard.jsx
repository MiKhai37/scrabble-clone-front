import React, { useContext} from 'react'
import { Typography } from 'antd';
import AuthContext from '../Contexts/authContext';

const { Title } = Typography;

const DashBoardPage = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <Title>{authContext.user?.username}'s Dashboard</Title>
    </div>
  )
}

export default DashBoardPage
