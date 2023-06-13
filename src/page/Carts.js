import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
const Carts = () => {

  const navigate = useNavigate();

  return (
  
    <div className='h-[100vh] flex  justify-around mt-[88px] items-center text-[40px] font-[600] '>
      <div className=''>Carts</div>
      <div className='border-solid border-[1px] border-[#000] p-[10px]' onClick={()=>{navigate("/checkout")}}>Check out</div>
    </div>
  )
}

export default Carts