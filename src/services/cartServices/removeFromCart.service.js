import axios from "axios";

const removeFromCartService = (_id, token) => {
    return axios.delete(`/api/user/cart/${_id}`, { headers: { authorization: token } })
}

export { removeFromCartService };
