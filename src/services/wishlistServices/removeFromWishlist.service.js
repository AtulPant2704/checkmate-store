import axios from "axios";

const removeFromWishlistService = (_id, token) => {
  return axios.delete(`/api/user/wishlist/${_id}`, {
    headers: { authorization: token },
  });
};

export { removeFromWishlistService };
