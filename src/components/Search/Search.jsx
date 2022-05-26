import { useState, useEffect } from "react";
import { getProductsHandler } from "../../utils";

const Search = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => getProductsHandler(setProducts, "search"), []);

  return (
    <div className="search">
      <span className="btn-search">
        <i className="fas fa-search"></i>
      </span>
      <input type="text" placeholder="Search" className="input-search" />
    </div>
  );
};

export { Search };
