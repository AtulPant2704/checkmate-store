import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useCart, useAuth, useWishlist } from "../../context";
import {
  getCartItemsHandler,
  removeFromCartHandler,
  updateCartHandler,
  getCartBill,
  moveToWishlistHandler,
} from "../../utils";
import { Loader, AddressModal } from "../../components";
import { CartItem } from "./components/CartItem";
import { CartSummary } from "./components/CartSummary";
import { CouponModal } from "./components/CouponModa/CouponModal";
import { AddressSelect } from "./components/AddressSelect/AddressSelect";
import { CartBill } from "./components/CartBill/CartBill";
import { getAddressesHandler } from "../../utils";
import "./Cart.css";

const Cart = () => {
  const [cartLoader, setCartLoader] = useState(false);
  const [couponModalOpen, setCouponModalOpen] = useState(false);
  const [couponType, setCouponType] = useState("");
  const [checkout, setCheckout] = useState(false);
  const [selectedAddress, setSelectedAddres] = useState(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    authState: { token, addresses },
    authDispatch,
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
    setCouponType("");
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
    getAddressesHandler(token, authDispatch);
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
      {showAddressModal ? (
        <AddressModal
          showAddressModal={showAddressModal}
          setShowAddressModal={setShowAddressModal}
        />
      ) : null}
      {!checkout ? (
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
                        cartDelivery={"FREE"}
                        cartAmount={totalPrice}
                        setCouponModalOpen={setCouponModalOpen}
                        setCheckout={setCheckout}
                      />
                    </div>
                  </section>
                </>
              )}
            </>
          ) : (
            <div className="empty-items">
              <h2>Your Cart is empty</h2>
              <Link to="/products">
                <button className="btn btn-solid-primary btn-link-products">
                  Start Shopping
                </button>
              </Link>
            </div>
          )}
        </main>
      ) : (
        <main>
          <h1 className="page-title">Checkout</h1>
          <section className="bill-address-container">
            <AddressSelect
              addresses={addresses}
              setSelectedAddres={setSelectedAddres}
              setShowAddressModal={setShowAddressModal}
            />
            <CartBill
              selectedAddress={selectedAddress}
              itemsPrice={itemsPrice}
              totalPrice={totalPrice}
            />
          </section>
        </main>
      )}
    </>
  );
};

export { Cart };
