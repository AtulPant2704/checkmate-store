import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFilter, useCart, useWishlist, useAuth } from "../../context";
import {
  getProductsHandler,
  sortData,
  categoryFilter,
  priceFilter,
  ratingFilter,
  inStockFilter,
  addToCartHandler,
  addToWishlistHandler,
  removeFromWishlistHandler,
} from "../../utils";
import { Loader } from "../../components";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";
import { Pagination } from "./components/Pagination";
import "./ProductsListing.css";
import "./loaders.css";

const ProductsListing = () => {
  const navigate = useNavigate();
  const [productsLoader, setProductsLoader] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  const [mobileFilter, setMobileFilter] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const { filterState } = useFilter();

  const checkCartAction = (_id) => {
    const item = cart.some((item) => item._id === _id);
    return item ? "Go to Cart" : "Add to Cart";
  };

  const callAddToCartHandler = (_id, setCartButtonLoader) => {
    if (token) {
      const product = products.find((item) => item._id === _id);
      addToCartHandler(product, cartDispatch, token, setCartButtonLoader);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkCartRouteHandler = (e, _id, setCartButtonLoader) => {
    e.stopPropagation();
    return checkCartAction(_id) === "Add to Cart"
      ? callAddToCartHandler(_id, setCartButtonLoader)
      : navigate("/cart");
  };

  const checkWishlistAction = (_id) =>
    wishlist.some((item) => item._id === _id);

  const callAddToWishlistHandler = (_id, setWishlistDisable) => {
    if (token) {
      const product = products.find((item) => item._id === _id);
      addToWishlistHandler(
        product,
        wishlistDispatch,
        token,
        setWishlistDisable
      );
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  const checkWishlistActionHandler = (e, _id, setWishlistDisable) => {
    e.stopPropagation();
    return checkWishlistAction(_id)
      ? removeFromWishlistHandler(
          _id,
          token,
          wishlistDispatch,
          setWishlistDisable
        )
      : callAddToWishlistHandler(_id, setWishlistDisable);
  };

  const openMobileFilterHandler = () => setMobileFilter(true);

  const getProducts = () => {
    getProductsHandler(setProducts, "products", setProductsLoader);
    window.scrollTo(0, 0);
  };

  useEffect(() => getProducts(), []);

  const categoryFilteredData = categoryFilter(products, filterState);
  const ratingFilteredData = ratingFilter(categoryFilteredData, filterState);
  const inStockFilteredData = inStockFilter(ratingFilteredData, filterState);
  const priceFilteredData = priceFilter(inStockFilteredData, filterState);
  const sortedData = sortData(priceFilteredData, filterState);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <main>
        <section className="filter-product-container">
          <div className={`filter-container ${mobileFilter ? "active" : ""}`}>
            <Filters
              mobileFilter={mobileFilter}
              setMobileFilter={setMobileFilter}
            />
          </div>

          <div className="products-section">
            <div className="products-count">
              <h2>
                Featured Products
                <span className="gray-text">
                  (showing {currentProducts.length} out of {sortedData.length}{" "}
                  products)
                </span>
              </h2>
            </div>
            <div className="product-container">
              {productsLoader ? (
                <Loader />
              ) : sortedData.length > 0 ? (
                <>
                  {currentProducts.map((product) => (
                    <ProductCard
                      key={product._id}
                      {...product}
                      checkCartAction={checkCartAction}
                      checkCartRouteHandler={checkCartRouteHandler}
                      checkWishlistAction={checkWishlistAction}
                      checkWishlistActionHandler={checkWishlistActionHandler}
                    />
                  ))}
                  <Pagination
                    products={sortedData}
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    currentProducts={currentProducts}
                  />
                </>
              ) : (
                <div className="empty-products">
                  <h1 className="empty-msg">No Products Available</h1>
                </div>
              )}
            </div>
          </div>
        </section>
        {!mobileFilter && sortedData.length > 0 ? (
          <div
            className="filter-mobile-container"
            onClick={openMobileFilterHandler}
          >
            <button className="filter-open-btn">
              Filters <i className="fas fa-angle-up"></i>
            </button>
          </div>
        ) : null}
      </main>
    </>
  );
};

export { ProductsListing };
