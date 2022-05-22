import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../../../../context";
import "./UserDetails.css";

const UserDetails = () => {
    const navigate = useNavigate();
    const { authState: { user }, authDispatch } = useAuth();
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
        <div className="user-page">
            <div className="user-details">
                <h3 className="text-underline">Profile Details</h3>
                <div className="detail">
                    <div className="user-info">
                        <h4>Name</h4>
                        <p>{user.firstName} {user.lastName}</p>
                    </div>
                    <div className="user-info">
                        <h4>Email</h4>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>
            <div className="user-settings">
                <h3 className="text-underline">Account Settings</h3>
                <button
                    className="btn btn-solid-primary btn-logout"
                    onClick={logoutHandler}
                >Logout
                </button>
            </div>
        </div>
    )
}


export { UserDetails };
