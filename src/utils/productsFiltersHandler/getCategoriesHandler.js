import { getCategoriesService } from "../../services";

const getCategoriesHandler = async (setServerCategories) => {
  try {
    const response = await getCategoriesService();
    if (response.status === 200) {
      setServerCategories(response.data.categories);
    } else {
      throw new Error();
    }
  } catch (error) {
    alert(error);
  }
};

export { getCategoriesHandler };
