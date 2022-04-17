import { toast } from "react-toastify";
import { addNewOrderService } from "../../services";

const addNewOrderHandler = async (order, authDispatch, token) => {
    try {
        const response = await addNewOrderService(order, token);
        if (response.status === 201) {
            authDispatch({ type: "ADD_NEW_ORDER", payload: response.data.orders });
        } else {
            throw new Error();
        }
    } catch (error) {
        toast.error(error.response.data.errors[0]);
    }
};

export { addNewOrderHandler };
