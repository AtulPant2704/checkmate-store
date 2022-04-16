import axios from "axios";

const removeAddressService = (_id, token) => {
    return axios.delete(`/api/user/address/${_id}`, {
        headers: { authorization: token },
    });
};

export { removeAddressService };
