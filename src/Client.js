
import Home from './page/Home/Home'
import Navigation from './page/Home/Navigation';
import Register from './page/Register'
import Login from './page/Login'
import Products from './page/Products'
import Cart from './page/Carts'
import Checkout from './page/Checkout'
import ListProducts from './page/ListProducts'

import { BrowserRouter, Routes, Route } from "react-router-dom";
function Client() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}>

          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="collection/:pathName" element={<ListProducts />} />
        </Route>
          <Route path="checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Client;
