import React, { useState } from 'react'
import Carousel from './Carousel'
import productsApi from "../../api"
import { Link, useNavigate } from "react-router-dom";
import { Button, Space } from 'antd';
//toi la viet
const FeaturedProducts = () => {
  const navigate = useNavigate();

  const [productsArr, setProducsArr] = useState(productsApi)

  const showListProducts = productsArr.map(item =>
    <div className='h-[340px] flex flex-col items-center justify-between w-[268px] px-[12px] cursor-pointer mr-[20px]' onClick={() => navigate('/products')}>
      <img className='h-[268px]' src={item.img} />
      <h1 className='text-center text-[13px]'>{item.description}</h1>
      <h1 className='text-emerald-800 font-semibold tracking-widest'>${item.price} USD</h1>
    </div>
  )

  return (
    <div className='flex flex-col items-center '>
      <div className='w-[100%]'>
        <Carousel />
      </div > 
   
      <div className='class flex flex-col items-center justify-center'>
        <h1 className='text-[24px] font-[600px] my-[50px]'>PERSONALIZED NAME</h1>
        <div className=' flex flex-row mb-[40px px-[12px] pt-[16px]'>
          {showListProducts}
        </div>
      </div>
      <Button className='my-[20px]' size='large'>View more</Button>
    </div>
  )
}

export default FeaturedProducts