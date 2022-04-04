import axios from "axios";

const addToCartService = (product, token) => {
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
};

export { addToCartService };
