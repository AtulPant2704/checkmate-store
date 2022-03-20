import Sign from "jsonwebtoken/sign";
import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/index";
import { Login, SignUp, Home, Wishlist, Cart, ProductsListing } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
