import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Login,
  SignUp,
  Home,
  Wishlist,
  Cart,
  ProductsListing,
  Profile,
  Error404,
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
