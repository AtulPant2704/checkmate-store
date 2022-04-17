import Razorpay from "razorpay";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart } from "../../../context";
import { removeFromCartHandler } from "../../../utils";
import { brandName } from "../../../assets";

const CartSummary = ({
  cartItem,
  itemPrice,
  cartDiscount,
  cartDelivery,
  cartAmount,
  setCouponModalOpen,
  setCheckout
}) => {
  const navigate = useNavigate();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    authState: { user, token },
  } = useAuth();

  const placeOrder = async () => {
    const response = await loadSdk();
    if (response) {
      const options = {
        key: "rzp_test_5XcBERcG2QQhg2",
        key_id: "rzp_test_5XcBERcG2QQhg2",
        key_secret: "NoFPHQhwxAcw4fOuZSzC6ucl",
        amount: cartAmount * 100,
        currency: "INR",
        name: "CheckMate Store",
        description: "Thank you for shopping with us",
        image: brandName,
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          name: user.firstName,
          email: user.email,
          contact: "9999999999",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#202528" },
        handler: function (response) {
          cart.map((item) =>
            removeFromCartHandler(item._id, token, cartDispatch, "empty")
          );
          navigate("/products");
          toast.success("Order Placed Successfully");
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", function (response) {
        toast.error("Something went wrong", response.error.code);
      });
    } else {
      toast.error("Something went wrong");
    }
  };

  const loadSdk = async () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  return (
    <div className="bill-card">
      <h2 className="card-title">PRICE DETAILS</h2>
      <button
        className="apply-coupon-btn"
        onClick={() => setCouponModalOpen(true)}
      >
        <i className="fas fa-tags"></i> Apply Coupon
      </button>
      <div className="items-container">
        <div className="items-price">
          <p className="item-type">Price ({cartItem} item)</p>
          <p className="item-type-price">₹ {itemPrice}</p>
        </div>
        <div className="items-price">
          <p className="item-type">Discount</p>
          <p className="item-type-price">₹ {cartDiscount}</p>
        </div>
        <div className="items-price">
          <p className="item-type">Delivery</p>
          <p className="item-type-price">{cartDelivery}</p>
        </div>
      </div>
      <div className="items-price total-price-container">
        <p className="item-type total-price">Total Amount</p>
        <p className="item-type-price total-price-value">₹ {cartAmount}</p>
      </div>
      <p className="cart-savings">You saved ₹ {itemPrice - cartAmount}</p>
      <button className="order-btn ecommerce-btn" onClick={() => setCheckout(true)}>
        PLACE ORDER
      </button>
    </div>
  );
};

export { CartSummary };
