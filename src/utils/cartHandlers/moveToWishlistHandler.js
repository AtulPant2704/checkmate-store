import { removeFromCartHandler } from "./removeFromCartHandler";
import { addToWishlistHandler } from "../wishlistHandlers/addToWishlistHandler";

const moveToWishlistHandler = (_id, product, wishlistDispatch, token, cartDispatch) => {
    addToWishlistHandler(product, wishlistDispatch, token);
    removeFromCartHandler(_id, token, cartDispatch);
}

export { moveToWishlistHandler };
