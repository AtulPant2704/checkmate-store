import axios from "axios";

const addNewAddressService = (address, token) => {
    return axios.post(
        "/api/user/address",
        { address },
        { headers: { authorization: token } }
    );
};

export { addNewAddressService };
