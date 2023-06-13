import React from 'react'
import FeaturedProducts from './Home/FeaturedProducts'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <FeaturedProducts />
      <Footer/>
    </div>
  )
}

export default Home