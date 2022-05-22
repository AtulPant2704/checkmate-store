import axios from "axios";

const addNewOrderService = (order, token) => {
    return axios.post(
        "/api/user/orders",
        { ...order },
        { headers: { authorization: token } }
    );
};

export { addNewOrderService };
