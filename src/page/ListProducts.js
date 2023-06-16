import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import { useParams } from 'react-router-dom'
import ProductCartHome from '../component/ProductCartHome'
const ListProducts = () => {
  const { arrCollections, productsArr } = useContext(AppContext)
  const { pathName } = useParams();
  let nameCollection = arrCollections.find(collection => collection.pathName === pathName).name
  let productDisplay = productsArr.filter(product => product.collections === nameCollection)
  console.log({ productDisplay })
  return (
    <div className='h-[100vh] flex flex-col mt-[88px] px-3 items-center'>
      <div className="mt-[10px] mb-6 w-[100%] pl-[100px] text-[14px] font-[400] leading-5">
        <p className='text-[#001219]'>HOME / {nameCollection}</p> 
        <h5 className='text-[20px]'>{nameCollection}</h5>
      </div>
      <div className="flex flex-row flex-wrap">
        {
          productDisplay.map((item, id) => <ProductCartHome item={item} key={id} />)
        }

      </div>
    </div>
  )
}

export default ListProducts