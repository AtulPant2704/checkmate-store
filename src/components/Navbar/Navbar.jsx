import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = authState.user;
  const cart = cartState.cart;
  const wishlist = wishlistState.wishlist;

  const openMenuBar = () => {
    setMenuOpen(true);
  }
  const closeMenuBar = () => {
    setMenuOpen(false);
  }

  const checkStatus = (userName) => {
    return userName ? "Logout" : "Login";
  }

  const logoutHandler = () => {
    navigate("/");
    cartDispatch({ type: "EMPTY_CART" });
    wishlistDispatch({ type: "EMPTY_WISHLIST" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" })
  }

  const userHandler = async (type) => {
    type === "Login" ? navigate("/login") : logoutHandler();
  }

  const cartRouteHandler = () => {
    authState.token ? navigate("/cart") : navigate("/login");
  }

  const wishlistRouteHandler = () => {
    authState.token ? navigate("/wishlist") : navigate("/login");
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
          <div className="desktop-userName">
            {userName ? <h3>{userName.firstName}</h3> : null}
          </div>
          <button className="btn-login" onClick={() => userHandler(checkStatus(userName))}>{checkStatus(userName)}</button>
          <div className="btn-check" onClick={wishlistRouteHandler}>
            <i className="far fa-heart"></i>
            {wishlist.length !== 0 ? <span className="count">{wishlist.length}</span> : null}
          </div>
          <div className="btn-check" onClick={cartRouteHandler}>
            <i className="fas fa-shopping-cart"></i>
            {cart.length !== 0 ? <span className="count">{cart.length}</span> : null}
          </div>
        </div>
      </div>

      <div className={`hamburger-menu ${menuOpen ? "hamburger-menu-open" : ""}`}>
        <div className="profile-header">
          <div className="user-profile">
            <i className="fas fa-user"></i>
            {userName ? <p className="user-name">{userName.firstName}</p> : null}
          </div>
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
