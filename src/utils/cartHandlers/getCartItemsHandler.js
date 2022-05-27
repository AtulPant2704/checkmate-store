import { getCartItemsService } from "../../services";

const getCartItemsHandler = async (
  token,
  cartDispatch,
  from = "cart",
  setCartLoader
) => {
  if (token) {
    try {
      if (from === "cart") {
        setCartLoader(true);
      }
      const response = await getCartItemsService(token);
      if (response.status === 200) {
        cartDispatch({ type: "GET_CART", payload: response.data.cart });
        if (from === "cart") {
          setCartLoader(false);
        }
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { getCartItemsHandler };
