import React, { useState, useContext } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import AuthContext from '../Contexts/authContext';


const { Title, Text } = Typography;

const SignUpPage = () => {
  const authContext = useContext(AuthContext);
  // eslint-disable-next-line
  const [errorMsg, setErrorMsg] = useState('');

  const onFinish = async (values) => {

    if (values.confirmation !== values.password) {
      setErrorMsg('Password and confirmation do not match');
      return;
    }

    const user = {
      email: values.email,
      username: values.username,
      password: values.password
    }
    setErrorMsg(await authContext.signup(user))
  };

  return (
    <>
      <Title>Sign Up</Title>
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
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
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

        <Form.Item
          label="Confirmation"
          name="confirmation"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
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

export default SignUpPage
