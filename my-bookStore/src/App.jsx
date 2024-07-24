import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Shop from "./components/pages/Shop.jsx";
import Contact from "./components/pages/Contact.jsx";
import SearchPage from "./components/pages/SearchPage.jsx";
import CartPage from "./components/pages/CartPage.jsx";
import CheckoutPage from "./components/pages/CheckoutPage.jsx";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/SearchPage" element={<SearchPage />}></Route>
          <Route path="/CartPage" element={<CartPage />}></Route>
          <Route path="/CheckoutPage" element={<CheckoutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
