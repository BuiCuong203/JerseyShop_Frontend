import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Collection from "./pages/Collection"
import About from "./pages/About"
import Wishlist from "./pages/Wishlist"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Policy from "./pages/Policy"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
import OrderSuccess from "./pages/OrderSuccess";
import Register from "./pages/Register";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/order-success' element={<OrderSuccess />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App