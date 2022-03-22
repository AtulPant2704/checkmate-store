import { addToCartService } from "../../services";

const addToCartHandler = async (product, cartDispatch, token, setCartButtonLoader) => {
    try {
        setCartButtonLoader(true);
        const response = await addToCartService(product, token);
        if (response.status === 201) {
            cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
    finally{
        setCartButtonLoader(false);
    }
}

export { addToCartHandler }
