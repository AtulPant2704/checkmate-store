import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../context";
import "./Navbar.css";
import { Search } from "../Search/Search";

const Navbar = () => {
  const navigate = useNavigate();
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

  const openMenuBar = () => setMenuOpen(true);

  const closeMenuBar = () => setMenuOpen(false);

  const checkStatus = (user) => {
    return user ? `Hi, ${user.firstName}` : "Login";
  };

  const userHandler = async (type) => {
    type === "Login" ? routeHandler("/login") : routeHandler("/profile");
  };

  const routeHandler = (path) => {
    closeMenuBar();
    navigate(path);
    if (!token && path !== "/login") {
      toast.warning("You're not logged in");
    }
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

        <Search />

        <div className="user-controls">
          <div className="user-action">
            <div
              className="btn btn-text-primary btn-user"
              onClick={() => userHandler(checkStatus(user))}
            >
              <i className="fas fa-user"></i>
              <p>{checkStatus(user)}</p>
            </div>
          </div>
          <div
            className="btn-check btn-wishlist"
            onClick={() => routeHandler("/wishlist")}
          >
            <i className="fas fa-heart"></i>
            {wishlist.length !== 0 ? (
              <span className="count">{wishlist.length}</span>
            ) : null}
            <p>Wishlist</p>
          </div>
          <div
            className="btn-check btn-cart"
            onClick={() => routeHandler("/cart")}
          >
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
            <li onClick={() => routeHandler("/cart")}>Cart</li>
            <li onClick={() => routeHandler("/wishlist")}>Wishlist</li>
            <li onClick={() => userHandler(checkStatus(user))}>
              {token ? "Profile" : "Login"}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
