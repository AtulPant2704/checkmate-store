import { removeFromCartHandler } from "./removeFromCartHandler";
import { addToWishlistHandler } from "../wishlistHandlers/addToWishlistHandler";

const moveToWishlistHandler = (_id, product, wishlistDispatch, token, cartDispatch,setWishlistDisable,wishlist) => {
    const wishlistItem = wishlist.find(item => item._id === _id);
    if(!wishlistItem){
        addToWishlistHandler(product, wishlistDispatch, token,setWishlistDisable);
    }
    removeFromCartHandler(_id, token, cartDispatch);
}

export { moveToWishlistHandler };
