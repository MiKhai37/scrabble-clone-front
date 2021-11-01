import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text } = Typography;

const SignUpPage = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const history = useHistory();

  const onFinish = async (values) => {
    setErrorMsg('');
    try {
      if (values.password === values.confirmation) {
        history.push('/login');
      } else {
        throw new Error("The confirmation is wrong");
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
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
