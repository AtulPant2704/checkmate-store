import { toast } from "react-toastify";
import { addToCartHandler } from "../cartHandlers/addToCartHandler";
import { updateCartHandler } from "../cartHandlers/updateCartHandler";

const moveToCartHandler = (
  _id,
  product,
  token,
  cartState,
  cartDispatch,
  setCartButtonLoader
) => {
  const { cart } = cartState;
  const item = cart.find((item) => item._id === _id);
  if (item) {
    updateCartHandler(_id, "increment", token, cartDispatch);
    toast.info(
      `${product.title} already exists in cart, increased it's quantity`
    );
  } else {
    addToCartHandler(product, cartDispatch, token, setCartButtonLoader);
  }
};

export { moveToCartHandler };
