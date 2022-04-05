import { getCartItemsService } from "../../services";

const getCartItemsHandler = async (token, cartDispatch, setCartLoader) => {
  if (token) {
    try {
      setCartLoader(true);
      const response = await getCartItemsService(token);
      if (response.status === 200) {
        cartDispatch({ type: "GET_CART", payload: response.data.cart });
        setCartLoader(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { getCartItemsHandler };
