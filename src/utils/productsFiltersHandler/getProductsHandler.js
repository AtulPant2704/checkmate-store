import { getProductsService } from "../../services";

const getProductsHandler = async (setProducts, from, setProductsLoader) => {
  try {
    if (from === "products") {
      setProductsLoader(true);
    }
    const response = await getProductsService();
    if (response.status === 200) {
      setProducts(response.data.products);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.error(error);
  } finally {
    if (from === "products") {
      setProductsLoader(false);
    }
  }
};

export { getProductsHandler };
