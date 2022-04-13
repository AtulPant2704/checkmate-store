import axios from "axios";

const getSingleProductService = (productId) => {
    return axios.get(`/api/products/${productId}`);
}

export { getSingleProductService }
