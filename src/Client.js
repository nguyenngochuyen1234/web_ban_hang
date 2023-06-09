
import './App.css';
import Home from './page/Home'
import Navigation from './page/Home/Navigation';
import Register from './page/Register'
import Login from './page/Login'
import Products from './page/Products'
import Cart from './page/Carts'
import Checkout from './page/Checkout'
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
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          {/* <Route path="register" element={<Login />} /> */}
        </Route>
        <Route path="checkout" element={<Checkout />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>

  )
}

export default Client;
