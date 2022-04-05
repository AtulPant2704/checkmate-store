import { getWishlistItemsService } from "../../services";

const getWishlistItemsHandler = async (
  token,
  wishlistDispatch,
  setWishlistLoader
) => {
  if (token) {
    try {
      setWishlistLoader(true);
      const response = await getWishlistItemsService(token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_WISHLIST",
          payload: response.data.wishlist,
        });
        setWishlistLoader(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { getWishlistItemsHandler };
