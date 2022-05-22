import { getSingleProductService } from "../../services";
import { toast } from "react-toastify";

const getSingleProductHandler = async (productId, setProduct, setLoader) => {
    try {
        setLoader(true);
        const response = await getSingleProductService(productId);
        if (response.status === 200) {
            setProduct(response.data.product);
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        toast.error(error.response.data.errors[0]);
    }
    finally {
        setLoader(false);
    }
}

export { getSingleProductHandler };
