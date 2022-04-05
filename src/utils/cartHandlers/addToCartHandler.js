import { toast } from "react-toastify";
import { addToCartService } from "../../services";

const addToCartHandler = async (
  product,
  cartDispatch,
  token,
  setCartButtonLoader
) => {
  try {
    setCartButtonLoader(true);
    const response = await addToCartService(product, token);
    if (response.status === 201) {
      cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
      toast.info(`${product.title} added to Cart`);
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setCartButtonLoader(false);
  }
};

export { addToCartHandler };
