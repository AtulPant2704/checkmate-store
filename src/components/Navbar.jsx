const Navbar = () => {
    return (
      <header>
        <div className="nav-header">
          <div className="title">
            <i className="fas fa-bars menu-bar"></i>
            <a href="./index.html">
              <h2 className="nav-title">CheckMate</h2>
            </a>
          </div>
          <div className="search">
            <span className="btn-search">
              <i className="fas fa-search"></i>
            </span>
            <input type="text" placeholder="Search" className="input-search" />
          </div>
          <div className="user-controls">
            <a href="./authentication/login/login.html">
              <button className="btn-login">Login</button>
            </a>
            <a className="btn-check" href="./wishlist/wishlist.html">
              <i className="far fa-heart"></i>
              <span className="count">0</span>
            </a>
            <a className="btn-check" href="./cart/cart.html">
              <i className="fas fa-shopping-cart"></i>
              <span className="count">0</span>
            </a>
          </div>
        </div>
  
        <div className="hamburger-menu">
          <div className="profile-header">
            <i className="fas fa-user"></i>
            <i className="fas fa-times menu-bar-close"></i>
          </div>
          <div className="page-routes">
            <ul>
              <li>
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="./product/product.html">Shop Now</a>
              </li>
              <li>
                <a href="./cart/cart.html">Orders</a>
              </li>
              <li>
                <a href="./wishlist/wishlist.html">Wishlist</a>
              </li>
              <li>
                <a href="./authentication/login/login.html">Login</a>
              </li>
              <li>
                <a href="./authentication/sign-up/sign-up.html">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  };
  
  export { Navbar };
  