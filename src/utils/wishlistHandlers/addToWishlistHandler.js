import { toast } from "react-toastify";
import { addToWishlistService } from "../../services";

const addToWishlistHandler = async (
  product,
  wishlistDispatch,
  token,
  setWishlistDisable
) => {
  try {
    setWishlistDisable(true);
    const response = await addToWishlistService(product, token);
    if (response.status === 201) {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: response.data.wishlist,
      });
      toast.success(`${product.title} added to Wishlist`);
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setWishlistDisable(false);
  }
};

export { addToWishlistHandler };
