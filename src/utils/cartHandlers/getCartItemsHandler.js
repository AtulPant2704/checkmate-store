import { getCartItemsService } from "../../services";

const getCartItemsHandler = async (token, cartDispatch) => {
    try {
        const response = await getCartItemsService(token);
        if (response.status === 200) {
            cartDispatch({ type: "GET_CART", payload: response.data.cart });
        } else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { getCartItemsHandler };
