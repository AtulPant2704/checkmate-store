import "./App.css";
import { Navbar } from "./components/index";
import { Footer } from "./components/index";
import { Login, SignUp, Home, Wishlist, Cart, Products } from "./pages/index";

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
