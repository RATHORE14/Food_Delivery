import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LogInPopup from "./Components/LogInPopup/LogInPopup";

const App = () => {

   const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LogInPopup setShowLogin={setShowLogin}/>:<></>}
      <div className=" app w-[80%] m-auto">
        <Navbar setShowLogin= {setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
