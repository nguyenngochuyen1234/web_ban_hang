import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";

const Products = () => {

  const navigate = useNavigate();

  return (
    <div className='h-[100vh] bg-[#ffdae0] flex flex-row justify-around'>
      <img className='h-[500px]' src='https://img.thesitebase.net/10266/10266415/products/ver_1/0x720@1685693632575.jpg'/>
      <button className='p-[5px] solid font-[800] text-[40px]' onClick={()=>{navigate('/cart')}}>Add to cart</button>
    </div>
  )
}

export default Products