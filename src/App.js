
import Home from './page/Home/Home'
import Navigation from './page/Home/Navigation';
import Register from './page/Register'
import Login from './page/Login'
import Products from './page/Products'
import Cart from './page/Carts'
import Checkout from './page/Checkout'
import ListProducts from './page/ListProducts'
import Admin from './Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD:src/Client.js
import Collections from './page/Collection';
function Client() {
=======
function App() {

>>>>>>> 343467e545940f36a100da3e33aeaf4c634a5cf6:src/App.js
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
<<<<<<< HEAD:src/Client.js
          <Route path="checkout" element={<Checkout />} />
          <Route path="collection" element={<Collections />} />
          {/* <Route path="register" element={<Login />} /> */}
=======
          <Route path="collection/:pathName" element={<ListProducts />} />
>>>>>>> 343467e545940f36a100da3e33aeaf4c634a5cf6:src/App.js
        </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
