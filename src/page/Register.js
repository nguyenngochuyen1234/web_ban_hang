import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Register = () => {

  

  return (
    <div className='flex flex-col justify-center items-center h-[100%]'>
      <h1 className='text-[50px]'>login</h1>
      <h1>Nếu đã có tài khoản</h1>
        <Link to="/login" className='text-[#074ac7] text-[30px]'>Đăng nhập</Link>
    </div>
  )
}

export default Register