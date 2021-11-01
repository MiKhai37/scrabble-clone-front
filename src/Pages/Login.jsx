import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const onFinish = async (values) => {
    setErrorMsg('');
    try {
      if (values.username === 'user1' && values.password === 'pass1') {
        history.push('/profile');
      } else {
        throw new Error("Wrong combination of username/password");
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
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
