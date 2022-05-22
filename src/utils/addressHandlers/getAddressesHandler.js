import { toast } from "react-toastify";
import { getAddressService } from "../../services";

const getAddressesHandler = async (token, authDispatch) => {
    try {
        const response = await getAddressService(token);
        authDispatch({ type: "GET_ADDRESS", payload: response.data.address })
    }
    catch (error) {
        toast.error(error.response.data.errors[0]);
    }
}

export { getAddressesHandler };
