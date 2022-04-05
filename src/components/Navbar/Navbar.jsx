import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist, useFilter } from "../../context";
import "./Navbar.css";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const {
    authState: { user, token },
  } = useAuth();
  const {
    cartState: { cart },
  } = useCart();
  const {
    wishlistState: { wishlist },
  } = useWishlist();
  const { filterDispatch } = useFilter();

  const openMenuBar = () => setMenuOpen(true);

  const closeMenuBar = () => setMenuOpen(false);

  const checkStatus = (user) => {
    return user ? `Hi, ${user.firstName}` : "Login";
  };

  const navigateLogin = () => {
    navigate("/login");
    toast.warning("You're not logged in");
  };

  const userHandler = async (type) => {
    closeMenuBar();
    type === "Login" ? navigateLogin() : navigate("/profile");
  };

  const cartRouteHandler = () => {
    closeMenuBar();
    token ? navigate("/cart") : navigateLogin();
  };

  const wishlistRouteHandler = () => {
    closeMenuBar();
    token ? navigate("/wishlist") : navigateLogin();
  };

  const searchProducts = (event) => {
    filterDispatch({ type: "RESET", payload: {} });
    setSearchQuery(event.target.value);
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
        {location.pathname === "/products" ? (
          <div className="search">
            <span className="btn-search">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="input-search"
              value={searchQuery}
              onChange={searchProducts}
            />
          </div>
        ) : null}
        <div className="user-controls">
          <div className="user-action">
            <button
              className="btn btn-text-primary btn-user"
              onClick={() => userHandler(checkStatus(user))}
            >
              <i className="fas fa-user"></i>
            </button>
            <p>{checkStatus(user)}</p>
          </div>
          <div
            className="btn-check btn-wishlist"
            onClick={wishlistRouteHandler}
          >
            <i className="fas fa-heart"></i>
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
            {user ? <p className="user-name">{user.firstName}</p> : null}
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
            <li onClick={cartRouteHandler}>Cart</li>
            <li onClick={wishlistRouteHandler}>Wishlist</li>
            <li onClick={() => userHandler(checkStatus(user))}>Profile</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
