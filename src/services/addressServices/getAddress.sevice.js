import axios from "axios";

const getAddressService = (token) => {
    return axios.get("/api/user/address", { headers: { authorization: token } });
};

export { getAddressService };
