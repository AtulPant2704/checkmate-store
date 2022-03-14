import Sign from "jsonwebtoken/sign";
import "./App.css";
import { Navbar, Footer } from "./components/index";
import { Login, SignUp, Home, Wishlist, Cart, ProductsListing } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
