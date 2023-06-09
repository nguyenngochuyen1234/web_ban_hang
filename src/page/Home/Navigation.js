import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className='h-[100vh]'>
      <div className='flex flex-row h-[88px] py-[20px] justify-around items-center relative'>
        <div className='line-row'></div>
        <img className='h-[50px]' onClick={()=>{navigate('/')}}  src='https://img.thesitebase.net/files/10266415/2021/11/05/180x180@16361030598d3d90458e.png' />
        <h1>NAVIGATION</h1>
        <Link to="/login">Đăng nhập</Link>
      </div>
        <Outlet />
    </div>
  )
}

export default Navigation