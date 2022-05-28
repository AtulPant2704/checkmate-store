import { getSingleProductService } from "../../services";
import { toast } from "react-toastify";

const getSingleProductHandler = async (
  productId,
  setProduct,
  setLoader,
  navigate
) => {
  try {
    setLoader(true);
    const response = await getSingleProductService(productId);
    if (response.data.product === null) {
      navigate("*");
    } else if (response.status === 200) {
      setProduct(response.data.product);
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.error(error.response.data.errors[0]);
  } finally {
    setLoader(false);
  }
};

export { getSingleProductHandler };
