import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;
//require('dotenv').config()
const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const onFinish = async (values) => {
    setErrorMsg('');

    const body = {
      email: values.email,
      password: values.password,
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.status === 200) {
        history.push('/profile');
      } else {
        throw new Error(await res.text());
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
