import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getProductsHandler } from "../../utils";

const Search = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchProducts] = useState([]);
  const [displaySearch, setDisplaySearch] = useState(false);
  const [checkDebouce, setCheckDebounce] = useState(false);
  const [checkClick, setCheckClick] = useState(false);
  const timerRef = useRef();

  useEffect(() => getProductsHandler(setProducts, "search"), []);

  useEffect(() => {
    clearTimeout(timerRef.current);
    setCheckDebounce(false);
    timerRef.current = setTimeout(() => {
      const foundProducts = products.filter(
        (product) =>
          searchQuery.length !== 0 &&
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchProducts(foundProducts);
      setCheckDebounce(true);
    }, 300);
  }, [searchQuery]);

  const navigateHandler = (productId) => {
    console.log("hello");
    setCheckClick(true);
    navigate(`products/${productId}`);
    setSearchQuery("");
  };

  useEffect(() => {
    setCheckClick(false);
  }, [navigate]);

  return (
    <>
      <div className="search">
        <div className="input-search">
          <span className="btn-search">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            onFocus={() => setDisplaySearch(true)}
            onBlur={() => (checkClick ? setDisplaySearch(false) : null)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {displaySearch &&
        searchedProducts.length > 0 &&
        searchQuery.length > 0 ? (
          <ul className="search-items-container">
            {searchedProducts.map((product) => (
              <li
                key={product._id}
                className="search-item"
                onClick={() => navigateHandler(product._id)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        ) : displaySearch &&
          checkDebouce &&
          searchedProducts.length === 0 &&
          searchQuery.length > 0 ? (
          <ul className="search-items-container">
            <li className="search-item">No products found</li>
          </ul>
        ) : null}
      </div>
    </>
  );
};

export { Search };
