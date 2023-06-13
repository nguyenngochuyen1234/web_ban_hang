import React, { useState } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons/lib/icons';
import { AudioOutlined } from '@ant-design/icons';
import CartDrawerContainer from '../../component/CartDrawerContainer';
import { Input, Space } from 'antd';

import './app.css'
const { Search } = Input;
const Navigation = () => {
  const [CartDrawerContainerOpen, setCartDrawerContainerOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <div className='h-[100vh]'>
      <div className='flex flex-row h-[88px] py-[20px] justify-around items-center relative'>
        <div className='line-row'></div>
        <img className='h-[50px]' onClick={() => { navigate('/') }} src='https://img.thesitebase.net/files/10266415/2021/11/05/180x180@16361030598d3d90458e.png' />
        <div>
          <a className='mx-[20px] cursor-pointer relative categories'>CATEGORIES
            <DownOutlined className='text-xs absolute top-[3px] right-[-15px]' />
            <ul className='absolute bg-white w-[140px]  ease-out hidden block shadow-2xl left-0 top-[18px] py-[20px] z-30'>
              <li className='hover:bg-[#f5f5f5] h-[40px] text-base font-normal py-[3px] px-[8px] leading-10'>JD1 Sneaker</li>
              <li className='hover:bg-[#f5f5f5] h-[40px] text-base font-normal py-[3px] px-[8px] leading-10'>NAF Sneaker</li>
              <li className='hover:bg-[#f5f5f5] h-[40px] text-base font-normal py-[3px] px-[8px] leading-10'>Mid Sneaker</li>
              <li className='hover:bg-[#f5f5f5] h-[40px] text-base font-normal py-[3px] px-[8px] leading-10'>All-Session</li>
              <li className='hover:bg-[#f5f5f5] h-[40px] text-base font-normal py-[3px] px-[8px] leading-10'>High Top </li>
            </ul>
          </a>
          <a className='mx-[20px] cursor-pointer'>PERSONALIZED*</a>
          <a className='mx-[20px] cursor-pointer'>ABOUT US</a>
          <a className='mx-[20px] cursor-pointer'>BLOGS</a>
        </div>
        <div className='flex'>
          {/* <Search placeholder="" className='w-[150px]' enterButton /> */}
          <Link to="/login"><UserOutlined className='text-xl font-bold mx-[5px]' /></Link>
          <Link to="/"><ShoppingCartOutlined className='text-xl font-bold mx-[5px] relative' onMouseOver={()=>{setCartDrawerContainerOpen(true)}}/>
            {CartDrawerContainerOpen&&<CartDrawerContainer setCartDrawerContainerOpen={setCartDrawerContainerOpen}/>}
          </Link>
        </div>

      </div>
      <Outlet />
    </div>
  )
}

export default Navigation