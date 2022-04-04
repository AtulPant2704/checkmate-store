import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useAuth, useWishlist } from "../../context";
import { CartItem } from "./components/CartItem";
import { CartBill } from "./components/CartBill";
import {
  getCartItemsHandler,
  removeFromCartHandler,
  updateCartHandler,
  getCartBill,
  moveToWishlistHandler,
} from "../../utils";
import "./Cart.css";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { token } = authState;
  const { cart } = cartState;
  const { wishlist } = wishlistState;
  const { cartQuantity, itemsPrice, totalPrice } = getCartBill(cart);

  const callUpdateCartHandler = (_id, actionType) => {
    updateCartHandler(_id, actionType, token, cartDispatch);
  };

  const callRemoveFromCartHandler = (_id) => {
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

  useEffect(() => getCartItemsHandler(token, cartDispatch), []);

  return (
    <main className="empty-cart">
      {cart.length !== 0 ? (
        <>
          <h2 className="align-center page-title">
            My Cart ({cart.length !== 0 ? <span>{cart.length}</span> : null})
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
              <CartBill
                cartItem={cartQuantity}
                itemPrice={itemsPrice}
                cartDiscount={500}
                cartDelivery={"FREE"}
                cartAmount={totalPrice}
              />
            </div>
          </section>
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
  );
};

export { Cart };
