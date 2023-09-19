import React from "react";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login/Login";
import Signup from "./pages/Auth/SignUp/SignUp";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/OrderSucces/Success";

const App = () => {
  return (
    <Router>
      {/* <Cart /> */}
      {/* <AllProducts /> */}
      {/* <Login /> */}
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
