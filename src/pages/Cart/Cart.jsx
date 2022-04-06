import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useAuth, useWishlist } from "../../context";
import {
  getCartItemsHandler,
  removeFromCartHandler,
  updateCartHandler,
  getCartBill,
  moveToWishlistHandler,
} from "../../utils";
import { Navbar, Footer, Loader } from "../../components";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import { CouponModal } from "./components/CouponModa/CouponModal";
import "./Cart.css";

const Cart = () => {
  const [cartLoader, setCartLoader] = useState(false);
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [couponType, setCouponType] = useState("");
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    authState: { token },
  } = useAuth();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const { cartQuantity, itemsPrice, totalPrice } = getCartBill(
    cart,
    couponType
  );

  const callUpdateCartHandler = (_id, actionType) => {
    if (actionType === "decrement") {
      setCouponType("");
    }
    updateCartHandler(_id, actionType, token, cartDispatch);
  };

  const callRemoveFromCartHandler = (_id) => {
    setCouponType("");
    removeFromCartHandler(_id, token, cartDispatch);
  };

  const callMoveToWishlistHandler = (_id, setWishlistDisable) => {
    const item = cart.find((item) => item._id === _id);
    moveToWishlistHandler(
      _id,
      item,
      wishlistDispatch,
      token,
      cartDispatch,
      setWishlistDisable,
      wishlist
    );
  };

  const getCartItems = () => {
    getCartItemsHandler(token, cartDispatch, setCartLoader);
    window.scrollTo(0, 0);
  };

  useEffect(() => getCartItems(), []);

  return (
    <>
      {couponModalOpen ? (
        <CouponModal
          setCouponModalOpen={setCouponModalOpen}
          totalPrice={totalPrice}
          couponType={couponType}
          setCouponType={setCouponType}
        />
      ) : null}
      <Navbar />
      <main className="empty-cart">
        {cart.length !== 0 ? (
          <>
            {cartLoader ? (
              <Loader />
            ) : (
              <>
                <h2 className="align-center page-title">
                  My Cart (
                  {cart.length !== 0 ? <span>{cart.length}</span> : null})
                </h2>
                <section className="cart-bill-container">
                  <div className="cart-container">
                    {cart.map((item) => (
                      <CartItem
                        key={item._id}
                        {...item}
                        callRemoveFromCartHandler={callRemoveFromCartHandler}
                        callUpdateCartHandler={callUpdateCartHandler}
                        callMoveToWishlistHandler={callMoveToWishlistHandler}
                      />
                    ))}
                  </div>

                  <div className="bill-container">
                    <CartSummary
                      cartItem={cartQuantity}
                      itemPrice={itemsPrice}
                      cartDiscount={500}
                      cartDelivery={"FREE"}
                      cartAmount={totalPrice}
                      setCouponModalOpen={setCouponModalOpen}
                    />
                  </div>
                </section>
              </>
            )}
          </>
        ) : (
          <>
            <h2>Your Cart is empty</h2>
            <Link to="/products">
              <button className="btn btn-solid-primary btn-link-products">
                Start Shopping
              </button>
            </Link>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export { Cart };
