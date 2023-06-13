import React, { useState } from 'react'
import ProductCart from './ProductCart'
import productsApi from "../api"
const CartDrawerContainer = ({setCartDrawerContainerOpen}) => {
    const [productsArr, setProducsArr] = useState(productsApi)
    return (
        <div className='absolute mt-4 z-30 w-[420px] px-3 border-[1px] border-[#E6E6E6] right-[120px] bg-[#fff] pt-6 max-h-[650px] overflow-auto'>
            <div style={{position:'absolute', right:'12px', top:'12px', color:'#666666'}} onClick={()=>setCartDrawerContainerOpen(false)}>x</div>
            {
                productsArr.map(product => (
                    <ProductCart product={product} sizeImg='95px' />
                ))
            }
        </div>
    )
}

export default CartDrawerContainer