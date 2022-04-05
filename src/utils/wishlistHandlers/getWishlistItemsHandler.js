import { getWishlistItemsService } from "../../services";

const getWishlistItemsHandler = async (token, wishlistDispatch) => {
  if (token) {
    try {
      const response = await getWishlistItemsService(token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_WISHLIST",
          payload: response.data.wishlist,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      alert(error);
    }
  }
};

export { getWishlistItemsHandler };
