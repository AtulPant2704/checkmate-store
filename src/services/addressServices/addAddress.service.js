import axios from "axios";

const addAddressService = (address, token) => {
    return axios.post(
        "/api/user/address",
        { address },
        { headers: { authorization: token } }
    );
};

export { addAddressService };
