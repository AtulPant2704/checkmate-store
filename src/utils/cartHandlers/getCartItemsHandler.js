import { getCartItemsService } from "../../services";

const getCartItemsHandler = async (token, cartDispatch) => {
  if (token) {
    try {
      const response = await getCartItemsService(token);
      if (response.status === 200) {
        cartDispatch({ type: "GET_CART", payload: response.data.cart });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { getCartItemsHandler };
