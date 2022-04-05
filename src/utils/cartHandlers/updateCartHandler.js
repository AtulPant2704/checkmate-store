import { updateCartService } from "../../services";

const updateCartHandler = async (_id, actionType, token, cartDispatch) => {
  try {
    const response = await updateCartService(_id, actionType, token);
    if (response.status === 200) {
      cartDispatch({ type: "UPDATE_CART", payload: response.data.cart });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  }
};

export { updateCartHandler };
