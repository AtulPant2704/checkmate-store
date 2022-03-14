import {useState} from "react";
import {Link} from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";

const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);

    const openMenuBar=()=>{
      setMenuOpen(true);
    }
    const closeMenuBar=()=>{
      setMenuOpen(false);
    }
    
    return (
      <header>
        <div className="nav-header">
          <div className="title">
            <i className="fas fa-bars menu-bar" onClick={openMenuBar}></i>
            <Link to="/">
              <h2 className="nav-title">CheckMate</h2>
            </Link>
          </div>
          <div className="search">
            <span className="btn-search">
              <i className="fas fa-search"></i>
            </span>
            <input type="text" placeholder="Search" className="input-search" />
          </div>
          <div className="user-controls">
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
            <Link className="btn-check" to="/wishlist">
              <i className="far fa-heart"></i>
              <span className="count">0</span>
            </Link>
            <Link className="btn-check" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              <span className="count">0</span>
            </Link>
          </div>
        </div>
  
        <div className={`hamburger-menu ${menuOpen ? "hamburger-menu-open" : ""}`}>
          <div className="profile-header">
            <i className="fas fa-user"></i>
            <i className="fas fa-times menu-bar-close" onClick={closeMenuBar}></i>
          </div>
          <div className="page-routes">
            <ul>
              <li>
                <Link to="/" onClick={closeMenuBar}>Home</Link>
              </li>
              <li>
                <Link to="/products" onClick={closeMenuBar}>Shop Now</Link>
              </li>
              <li>
                <Link to="/cart" onClick={closeMenuBar}>Orders</Link>
              </li>
              <li>
                <Link to="/wishlist" onClick={closeMenuBar}>Wishlist</Link>
              </li>
              <li>
                <Link to="/login" onClick={closeMenuBar}>Login</Link>
              </li>
              <li>
                <Link to="/signup" onClick={closeMenuBar}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };
  
  export { Navbar };
  