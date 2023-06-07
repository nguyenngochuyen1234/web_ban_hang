import React from 'react'
import { Outlet, Link } from "react-router-dom";
const login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100%]'>
      <h1 className='text-[50px]'>login</h1>
      <h1>Nếu chưa có tài khoản</h1>
        <Link to="/register" className='text-[#074ac7] text-[30px]'>Đăng ký</Link>
    </div>

  )
}

export default login