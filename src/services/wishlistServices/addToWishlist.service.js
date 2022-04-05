import axios from "axios";

const addToWishlistService = (product, token) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToWishlistService };
