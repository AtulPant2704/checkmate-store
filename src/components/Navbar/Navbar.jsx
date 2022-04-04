import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";

const Navbar = () => {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { cartState } = useCart();
  const { wishlistState } = useWishlist();
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = authState.user;
  const cart = cartState.cart;
  const wishlist = wishlistState.wishlist;

  const openMenuBar = () => {
    setMenuOpen(true);
  };
  const closeMenuBar = () => {
    setMenuOpen(false);
  };

  const checkStatus = (userName) => {
    return userName ? `Hi, ${userName.firstName}` : "Login";
  };

  const userHandler = async (type) => {
    type === "Login" ? navigate("/login") : navigate("/profile");
  };

  const cartRouteHandler = () => {
    closeMenuBar();
    authState.token ? navigate("/cart") : navigate("/login");
  };

  const wishlistRouteHandler = () => {
    closeMenuBar();
    authState.token ? navigate("/wishlist") : navigate("/login");
  };

  return (
    <header>
      <div className="nav-header">
        <div className="title-explore">
          <div className="title">
            <i className="fas fa-bars menu-bar" onClick={openMenuBar}></i>
            <Link to="/">
              <h2 className="nav-title">CheckMate</h2>
            </Link>
          </div>
          <div className="explore-tab">
            <Link to="/products">
              <h3>Shop Now</h3>
            </Link>
          </div>
        </div>
        <div className="search">
          <span className="btn-search">
            <i className="fas fa-search"></i>
          </span>
          <input type="text" placeholder="Search" className="input-search" />
        </div>
        <div className="user-controls">
          <div className="user-action">
            <button
              className="btn btn-text-primary btn-user"
              onClick={() => userHandler(checkStatus(userName))}
            >
              <i className="fas fa-user"></i>
            </button>
            <p>{checkStatus(userName)}</p>
          </div>
          <div
            className="btn-check btn-wishlist"
            onClick={wishlistRouteHandler}
          >
            <i className="far fa-heart"></i>
            {wishlist.length !== 0 ? (
              <span className="count">{wishlist.length}</span>
            ) : null}
            <p>Wishlist</p>
          </div>
          <div className="btn-check btn-cart" onClick={cartRouteHandler}>
            <i className="fas fa-shopping-cart"></i>
            {cart.length !== 0 ? (
              <span className="count">{cart.length}</span>
            ) : null}
            <p>Cart</p>
          </div>
        </div>
      </div>

      <div
        className={`hamburger-menu ${menuOpen ? "hamburger-menu-open" : ""}`}
      >
        <div className="profile-header">
          <div className="user-profile">
            <i className="fas fa-user"></i>
            {userName ? (
              <p className="user-name">{userName.firstName}</p>
            ) : null}
          </div>
          <i className="fas fa-times menu-bar-close" onClick={closeMenuBar}></i>
        </div>
        <div className="page-routes">
          <ul>
            <li>
              <Link to="/" onClick={closeMenuBar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={closeMenuBar}>
                Shop Now
              </Link>
            </li>
            <li>
              <Link to="/cart" onClick={closeMenuBar}>
                Orders
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={closeMenuBar}>
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={closeMenuBar}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" onClick={closeMenuBar}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
