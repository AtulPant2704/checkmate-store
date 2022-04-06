import { toast } from "react-toastify";
import { removeFromCartService } from "../../services";

const removeFromCartHandler = async (_id, token, cartDispatch, from = "") => {
  try {
    const response = await removeFromCartService(_id, token);
    if (response.status === 200) {
      cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart });
      !from && toast.info("Removed from cart");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
};

export { removeFromCartHandler };
