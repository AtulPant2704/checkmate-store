import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../context";
import { loginService } from "../../services";
import { getCartItemsHandler, getWishlistItemsHandler } from "../../utils";
import { Navbar, Footer } from "../../components";
import "./Authentication.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [saveUser, setSaveUser] = useState(false);
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const guestUser = {
    email: "test@gmail.com",
    password: "test123",
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUser);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await loginService(user);
        if (response.status === 200) {
          if (saveUser) {
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(response.data.foundUser));
          }
          getWishlistItemsHandler(response.data.encodedToken, wishlistDispatch);
          getCartItemsHandler(response.data.encodedToken, cartDispatch);
          authDispatch({
            type: "LOGIN",
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
              addresses: response.data.foundUser.address
            },
          });
          navigate(location?.state?.from?.pathname || -1, { replace: true });
          toast.success("Successfully Logged In");
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
      }
    } else {
      toast.warning("Both the fields need to be entered");
    }
  };

  return (
    <>
      <Navbar />
      <section className="form-section">
        <div className="form-wrapper">
          <h2 className="form-heading">Login</h2>
          <form action="" method="post" className="login">
            <div className="form-email">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="tanay@neog.camp"
                name="email"
                value={user.email}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="form-password">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="********"
                name="password"
                value={user.password}
                required
                onChange={changeHandler}
              />
            </div>
            <div className="user-history">
              <input type="checkbox" id="user-save" checked={saveUser} onChange={(e) => e.target.checked ? setSaveUser(true) : setSaveUser(false)} />
              <label htmlFor="user-save">Remember me</label>
            </div>
            <button
              className="btn btn-text-primary text-underline btn-guest"
              onClick={guestUserHandler}
            >
              Add Guest credentials
            </button>
            <button type="submit" className="btn-submit" onClick={loginHandler}>
              Submit
            </button>
          </form>
          <Link to="/signup" className="new-account">
            Create New Account <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export { Login };
