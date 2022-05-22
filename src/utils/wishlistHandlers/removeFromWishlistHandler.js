import { toast } from "react-toastify";
import { removeFromWishlistService } from "../../services";

const removeFromWishlistHandler = async (_id, token, wishlistDispatch, setWishlistDisable) => {
  try {
    setWishlistDisable(true);
    const response = await removeFromWishlistService(_id, token);
    if (response.status === 200) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: response.data.wishlist,
      });
      toast.info("Removed from Wishlist");
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  }
  finally {
    setWishlistDisable(false);
  }
};

export { removeFromWishlistHandler };
