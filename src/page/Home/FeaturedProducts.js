import React, { useState } from 'react'
import productsApi from "../../api"
import {  Link, useNavigate } from "react-router-dom";
const FeaturedProducts = () => {
  const navigate = useNavigate();

  const [productsArr, setProducsArr] = useState(productsApi)

  const showListProducts = productsArr.map(item =>
    <div className='w-[270px]' onClick={()=>navigate('/products')}>
      <img className='h-[260px]' src={item.img} />
      <h1>{item.description}</h1>
      <h1>{item.price}</h1>
    </div>
  )

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div>
        <h1 className='text-[50px]'>PERSONALIZED NAME</h1>
        <div className=' flex flex-row'>
          {showListProducts}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts