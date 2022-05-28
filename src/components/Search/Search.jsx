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
  const timerRef = useRef();
  const searchBarRef = useRef();

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
    navigate(`products/${productId}`);
    setSearchQuery("");
  };

  const closeSearchBar = (e) => {
    if (!searchBarRef.current.contains(e.target)) {
      setDisplaySearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeSearchBar);

    return () => {
      document.removeEventListener("click", closeSearchBar);
    };
  }, []);

  useEffect(() => getProductsHandler(setProducts, "search"), []);

  return (
    <>
      <div className="search" ref={searchBarRef}>
        <div className="input-search">
          <span className="btn-search">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Search"
            className="input-search"
            onFocus={() => setDisplaySearch(true)}
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
