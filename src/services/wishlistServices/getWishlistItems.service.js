import axios from "axios";

const getWishlistItemsService = (token) => {
  return axios.get("/api/user/wishlist", { headers: { authorization: token } });
};

export { getWishlistItemsService };
