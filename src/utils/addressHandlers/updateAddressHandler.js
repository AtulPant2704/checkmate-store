import { toast } from "react-toastify";
import { updateAddressService } from "../../services";

const updateAddressHandler = async (address, token, authDispatch) => {
    try {
        const response = await updateAddressService(address, token);
        if (response.status === 200) {
            authDispatch({ type: "UPDATE_ADDRESS", payload: response.data.address });
            toast.success("Address Successfully Updated");
        } else {
            throw new Error();
        }
    } catch (error) {
        console.error(error);
    }
};

export { updateAddressHandler };

