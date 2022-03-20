import "./Cart.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartItem } from "./components/CartItem";
import { CartBill } from "./components/CartBill";
import { useCart, useAuth } from "../../hooks";
import { getCartItemsService } from "../../services";
import { removeFromCartHandler, updateCartHandler, getCartBill } from "../../utils";

const Cart = () => {
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { token } = authState;
  const { cart } = cartState;
  const { cartQuantity, itemsPrice, totalPrice } = getCartBill(cart);

  const callUpdateCartHandler = (_id, actionType) => {
    updateCartHandler(_id, actionType, token, cartDispatch);
  }

  const callRemoveFromCartHandler = (_id) => {
    removeFromCartHandler(_id, token, cartDispatch)
  }

  const getCartItems = async () => {
    try {
      const response = await getCartItemsService(token);
      if (response.status === 200) {
        cartDispatch({ type: "GET_CART", payload: response.data.cart })
      } else {
        throw new Error();
      }
    }
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => getCartItems(), []);

  return (
    <main className="empty-cart">
      {cart.length !== 0 ?
        <>
          <h2 className="align-center page-title">My Cart
              ({cart.length !== 0 ? <span>{cart.length}</span> : null})
          </h2>

          <section className="cart-bill-container">
            <div className="cart-container">
              {cart.map(item => (
                <CartItem
                  key={item._id}
                  cartId={item._id}
                  cartImg={item.image}
                  cartAlt={item.title}
                  cartTitle={item.title}
                  cartPrice={item.price}
                  cartQuantity={item.qty}
                  callRemoveFromCartHandler={callRemoveFromCartHandler}
                  callUpdateCartHandler={callUpdateCartHandler}
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
        : <>
          <h2>Your Cart is empty</h2>
          <Link to="/products">
            <button className="btn btn-solid-primary btn-link-products">Start Shopping</button></Link>
        </>}
    </main>
  );
};

export { Cart };
