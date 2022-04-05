import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navbar, Footer } from "./components/index";
import {
  Login,
  SignUp,
  Home,
  Wishlist,
  Cart,
  ProductsListing,
  Profile,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
