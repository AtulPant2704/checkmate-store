import { getProductsService } from "../../services";

const getProductsHandler = async (setProducts,setProductsLoader) => {
    try {
        setProductsLoader(true);
        const response = await getProductsService();
        if (response.status === 200) {
        setProducts(response.data.products);
        }
        else {
        throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
    finally{
        setProductsLoader(false);
    }
}

  export {getProductsHandler};
