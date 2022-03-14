import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Homepage/Home";
import { Login } from "./pages/Authentication/Login/Login";
import { SignUp } from "./pages/Authentication/SignUp/SignUp";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { Cart } from "./pages/Cart/Cart";
import { Products } from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
