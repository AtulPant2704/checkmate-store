import { removeFromWishlistService } from "../../services";

const removeFromWishlistHandler = async (_id, token, wishlistDispatch) => {
    try {
        const response = await removeFromWishlistService(_id, token);
        if (response.status === 200) {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: response.data.wishlist });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { removeFromWishlistHandler };
