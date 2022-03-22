import { useNavigate } from 'react-router-dom';
import {useFilter} from '../../../hooks';

const ProductsCategory = ({ cardImg,  cardTitle, categoryName }) => {
    const navigate = useNavigate();
    const {filterDispatch} = useFilter();

    const getCategoryProducts = (categoryName) => {
      filterDispatch({ type: "RESET", payload: {} });
      filterDispatch({   
        type: "CATEGORY_FILTER", 
        payload: {categoryType: categoryName, isChecked: true}
      });
      navigate("/products");
    }

    return (
      <div className="card-container" onClick={() => getCategoryProducts(categoryName)}>
        <div className="background">
          <img src={cardImg} alt={cardTitle} className="img-responsive" />
        </div>
        <div className="content">
          <h6 className="card-title">{cardTitle}</h6>
        </div>
      </div>
    );
  };
  
  export { ProductsCategory };
  