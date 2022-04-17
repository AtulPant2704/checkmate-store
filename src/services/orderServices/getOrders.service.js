import axios from "axios";

const getOrdersService = (token) => {
    return axios.get("/api/user/orders", { headers: { authorization: token } });
};

export { getOrdersService };
