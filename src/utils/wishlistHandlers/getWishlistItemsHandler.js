import { getWishlistItemsService } from "../../services";

const getWishlistItemsHandler = async (
  token,
  wishlistDispatch,
  from = "wishlist",
  setWishlistLoader
) => {
  if (token) {
    try {
      if (from === "wishlist") {
        setWishlistLoader(true);
      }
      const response = await getWishlistItemsService(token);
      if (response.status === 200) {
        wishlistDispatch({
          type: "GET_WISHLIST",
          payload: response.data.wishlist,
        });
        if (from === "wishlist") {
          setWishlistLoader(false);
        }
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export { getWishlistItemsHandler };
