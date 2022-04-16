import { toast } from "react-toastify";
import { addNewAddressService } from "../../services";

const addNewAddressHandler = async (address, authDispatch, token) => {
    try {
        const response = await addNewAddressService(address, token);
        if (response.status === 201) {
            authDispatch({ type: "ADD_NEW_ADDRESS", payload: response.data.address });
            toast.success("New Address Added");
        } else {
            throw new Error();
        }
    } catch (error) {
        toast.error(error.response.data.errors[0]);
    }
};

export { addNewAddressHandler };
