import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RequiresAuth } from "./RequiresAuth";
import {
  Login,
  SignUp,
  Home,
  Wishlist,
  Cart,
  ProductsListing,
  Profile,
  Error404,
  SingleProductPage,
  Orders,
  Address
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
        <Route path="/products" element={<ProductsListing />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        >
          <Route path="orders" element={<Orders />} />
          <Route path="address" element={<Address />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
