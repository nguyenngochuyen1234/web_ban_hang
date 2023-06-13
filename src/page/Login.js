import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Outlet, Link } from "react-router-dom";
const login = () => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  return (
    <div className='flex flex-col justify-center items-center h-[100%]'>
      <h1 className='text-[50px]'>ĐĂNG NHẬP</h1>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password?
        </a>
      </Form.Item>
      
      <Button className='bg-[#010101] text-[#fff] w-[100%]'>SIGN IN</Button> 
      <div className='flex justify-between'> 
        <h1>Nếu chưa có tài khoản?</h1>
        <Link to="/register" className='text-blue-400 hover:border-b border-blue-400'>SIGN UP</Link>
      </div>
    </Form>
    </div>

  )
}

export default login
