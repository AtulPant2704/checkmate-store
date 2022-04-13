import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";
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
  searchHandler,
} from "../../utils";
import { Navbar, Footer, Loader } from "../../components";
import "./ProductsListing.css";
import "./loaders.css";

const ProductsListing = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsLoader, setProductsLoader] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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
    const item = cart.find((item) => item._id === _id);
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

  const checkWishlistAction = (_id) => {
    const item = wishlist.find((item) => item._id === _id);
    return item ? "Remove" : "Add";
  };

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
    return checkWishlistAction(_id) === "Remove"
      ? removeFromWishlistHandler(_id, token, wishlistDispatch, setWishlistDisable)
      : callAddToWishlistHandler(_id, setWishlistDisable);
  };

  const openMobileFilterHandler = () => setMobileFilter(true);

  const getProducts = () => {
    getProductsHandler(setProducts, setProductsLoader);
    window.scrollTo(0, 0);
  };

  useEffect(() => getProducts(), []);

  const categoryFilteredData = categoryFilter(products, filterState);
  const ratingFilteredData = ratingFilter(categoryFilteredData, filterState);
  const inStockFilteredData = inStockFilter(ratingFilteredData, filterState);
  const priceFilteredData = priceFilter(inStockFilteredData, filterState);
  const sortedData = sortData(priceFilteredData, filterState);
  const searchedData = searchHandler(sortedData, searchQuery);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main>
        <section className="filter-product-container">
          <div className={`filter-container ${mobileFilter ? "active" : ""}`}>
            <Filters
              mobileFilter={mobileFilter}
              setMobileFilter={setMobileFilter}
            />
          </div>

          <div className="product-container">
            {productsLoader ? (
              <Loader />
            ) : searchedData.length > 0 ? (
              searchedData.map((product) => (
                <ProductCard
                  key={product._id}
                  {...product}
                  checkCartAction={checkCartAction}
                  checkCartRouteHandler={checkCartRouteHandler}
                  checkWishlistAction={checkWishlistAction}
                  checkWishlistActionHandler={checkWishlistActionHandler}
                />
              ))
            ) : (
                  <div className="empty-products">
                    <h1 className="empty-msg">No Products Available</h1>
                  </div>
                )}
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
      <Footer />
    </>
  );
};

export { ProductsListing };
