import React from 'react'
const Footer=()=>{
    return(
        <div className='bg-[#000] min-h-[400px] py-[80px] px-[10%] '>
            <div className='flex justify-between  border-b-[1px] border-white w-[100%]  py-[5px]'>
                <div className='text-white'>
                    <h3>CONTACT US</h3>
                    <h4>THANG LONG UNIVERSITY</h4>
                    <h4>24/7 Customer Service!</h4>
                    <h4>support@gearanime.com</h4>
                    <h4>Stay Connected</h4>
                    

                </div>
                <ul className='text-white'>
                     <li className=''>POLICIES</li>
                    <li className='cursor-pointer hover:underline'>Privacy policy</li>
                    <li className='cursor-pointer hover:underline'>Terms of Service</li>
                    <li className='cursor-pointer hover:underline'>Shipping policy</li>
                    <li className='cursor-pointer hover:underline'>Return & Refund policy</li>
                    <li className='cursor-pointer hover:underline'>Payment Method</li>
                    <li className='cursor-pointer hover:underline'>Cancellation & Exchange</li>
                    <li className='cursor-pointer hover:underline'> DMCA Notice</li>
                </ul>
                <ul className='text-white'>
                     <li className=''>SUPPORT</li>
                    <li className='cursor-pointer hover:underline'>About Us</li>
                    <li className='cursor-pointer hover:underline'>Contact us</li>
                    <li className='cursor-pointer hover:underline'>Is Gear Anime Legit?</li>
                    <li className='cursor-pointer hover:underline'>FAQs</li>
                    <li className='cursor-pointer hover:underline'>All reviews</li>
                </ul>
                <ul className='text-white'>
                     <li className=''>INFORMATION</li>
                    <li className='cursor-pointer hover:underline'>Where Is My Order?</li>
                    <li className='cursor-pointer hover:underline'>How to measure</li>
                    <li className='cursor-pointer hover:underline'>support@gearanime.com</li>
                    <li className='cursor-pointer hover:underline'>Promotions</li>
                    <li className='cursor-pointer hover:underline'>Affiliate</li>
                    <li className='cursor-pointer hover:underline'>The Official Gear Anime Store</li>
                </ul>

            </div>
            <div>
                <div>
                    {/* <h1 className='bg-[#fff]'>toi la viet</h1> */}
                    <ul>
                    <i class="fa-brands fa-facebook"></i>
                    </ul>
                </div>
                <div></div>

            </div>
        </div>
    )
}



export default Footer

