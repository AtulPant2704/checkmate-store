import { toast } from "react-toastify";
import { removeAddressService } from "../../services";

const removeAddressHandler = async (_id, token, authDispatch) => {
    try {
        const response = await removeAddressService(_id, token);
        if (response.status === 200) {
            authDispatch({ type: "REMOVE_ADDRESS", payload: response.data.address });
            toast.info("Address successfully removed");
        } else {
            throw new Error();
        }
    } catch (error) {
        toast.error(error.response.data.errors[0]);
    }
};

export { removeAddressHandler };
