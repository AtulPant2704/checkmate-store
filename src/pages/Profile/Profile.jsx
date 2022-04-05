import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../context";
import { Navbar, Footer } from "../../components";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const logoutHandler = () => {
    navigate("/");
    cartDispatch({ type: "EMPTY_CART" });
    wishlistDispatch({ type: "EMPTY_WISHLIST" });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    toast.success("Successfully Logged Out");
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="logout-page">
          <button
            className="btn btn-solid-primary btn-logout"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Profile };
