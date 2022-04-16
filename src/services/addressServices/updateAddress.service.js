import axios from "axios";

const updateAddressService = (address, token) => {
    return axios.post(
        `/api/user/address/${address._id}`,
        { address },
        { headers: { authorization: token } }
    );
};

export { updateAddressService };
