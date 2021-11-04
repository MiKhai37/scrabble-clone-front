import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { useAuth } from '../Auth/authContext';

const { Title, Text } = Typography;

const SignUpPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  useAuth().signup(email, password)

  const onFinish = async (values) => {

    setEmail(values.email);
    setPassword(values.password);
    console.log(email)
    console.log(password)

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
