import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Wishlist, Cart, ProductListing } from "./pages";
import { Signin, Signup } from "./pages/Auth";
import Mockman from "mockman-js";
import logo from "./logo.png";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/ProductListing" element={<ProductListing />}></Route>
        <Route path="/Wishlist" element={<Wishlist />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Signin" element={<Signin />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
