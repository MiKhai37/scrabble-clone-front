import React, { useState, useContext } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import AuthContext from '../Contexts/authContext';


const { Title, Text } = Typography;

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  // eslint-disable-next-line
  const [errorMsg, setErrorMsg] = useState('');
  // eslint-disable-next-line
  const [email, setEmail] = useState('');
  // eslint-disable-next-line
  const [password, setPassword] = useState('');

  const onFinish = async (values) => {

    console.log(values.email, values.password)

    authContext.login(values.email, values.password)

  };

  return (
    <>
      <Title>Login</Title>
      {errorMsg && <Text strong type='danger' className="error">{errorMsg}</Text>}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default LoginPage
