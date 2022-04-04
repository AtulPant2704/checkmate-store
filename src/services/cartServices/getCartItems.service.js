import axios from "axios";

const getCartItemsService = (token) => {
  return axios.get("/api/user/cart", { headers: { authorization: token } });
};

export { getCartItemsService };
