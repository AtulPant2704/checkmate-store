import { toast } from 'react-toastify';
import { getOrdersService } from "../../services";

const getOrdersHandler = async (token, authDispatch) => {
    try {
        const response = await getOrdersService(token);
        authDispatch({ type: "GET_ORDERS", payload: response.data.orders })
    }
    catch (error) {
        toast.error(error.response.data.errors[0]);
    }
}

export { getOrdersHandler };
