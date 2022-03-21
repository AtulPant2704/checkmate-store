import { addToCartHandler } from "../cartHandlers/addToCartHandler";
import { updateCartHandler } from "../cartHandlers/updateCartHandler";

const moveToCartHandler = (_id, product, token, cartState, cartDispatch) => {
    const { cart } = cartState;
    const item = cart.find(item => item._id === _id);
    if (item) {
        updateCartHandler(_id, "increment", token, cartDispatch);
    } else {
        addToCartHandler(product, cartDispatch, token);
    }
}

export { moveToCartHandler };
