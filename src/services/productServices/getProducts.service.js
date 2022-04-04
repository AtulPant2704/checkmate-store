import axios from "axios";

const getProductsService = () => {
  return axios.get("/api/products");
};

export { getProductsService };
