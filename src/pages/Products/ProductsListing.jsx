import "./ProductsListing.css";
import "../../loaders.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";
import { useFilter, useCart, useWishlist, useAuth } from "../../hooks";
import { getProductsService } from "../../services";
import { sortData, categoryFilter, priceFilter, ratingFilter, inStockFilter, addToCartHandler, addToWishlistHandler, removeFromWishlistHandler } from "../../utils"

const ProductsListing = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [productsLoader, setProductsLoader] = useState(false);
  const [mobileFilter, setMobileFilter] = useState(false);
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState } = useAuth();
  const { token } = authState
  const { cart } = cartState;
  const { wishlist } = wishlistState;
  const { filterState } = useFilter();

  const checkCartAction = (_id) => {
    const item = cart.find(item => item._id === _id);
    return item ? "Go to Cart" : "Add to Cart";
  }

  const callAddToCartHandler = (_id, setCartButtonLoader) => {
    if (token) {
      const product = products.find(item => item._id === _id);
      addToCartHandler(product, cartDispatch, token, setCartButtonLoader);
    }
    else {
      navigate("/login")
    }
  }

  const checkCartRouteHandler = (_id, setCartButtonLoader) => {
    return checkCartAction(_id) === "Add to Cart" ? callAddToCartHandler(_id, setCartButtonLoader) : navigate("/cart")
  }

  const checkWishlistAction = (_id) => {
    const item = wishlist.find(item => item._id === _id);
    return item ? "Remove" : "Add";
  }

  const callAddToWishlistHandler = (_id) => {
    if (token) {
      const product = products.find(item => item._id === _id);
      addToWishlistHandler(product, wishlistDispatch, token);
    }
    else {
      navigate("/login")
    }
  }

  const checkWishlistActionHandler = (_id) => {
    return checkWishlistAction(_id) === "Remove" ? removeFromWishlistHandler(_id, token, wishlistDispatch) : callAddToWishlistHandler(_id);
  }

  const loadProducts = async () => {
    try {
      setProductsLoader(true);
      const response = await getProductsService();
      if (response.status === 200) {
        setProducts(response.data.products);
        setProductsLoader(false);
      }
      else {
        throw new Error();
      }
    }
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => loadProducts(), [])

  const categoryFilteredData = categoryFilter(products, filterState);
  const ratingFilteredData = ratingFilter(categoryFilteredData, filterState);
  const inStockFilteredData = inStockFilter(ratingFilteredData, filterState);
  const priceFilteredData = priceFilter(inStockFilteredData, filterState);
  const sortedData = sortData(priceFilteredData, filterState);

  return (
    <div>
      <main>
        <section className="filter-product-container">
          <div className={`filter-container ${mobileFilter ? "active" : ""}`}>
            <Filters mobileFilter={mobileFilter} setMobileFilter={setMobileFilter} />
          </div>

          <div className="product-container">
            {productsLoader ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
              sortedData.length > 0 ? sortedData.map(product => (
                <ProductCard
                  key={product._id}
                  productId={product._id}
                  productImg={product.image}
                  productAlt={product.title}
                  productBadge={product.badge}
                  productTitle={product.title}
                  productPrice={product.price}
                  productRating={product.rating}
                  checkCartAction={checkCartAction}
                  checkCartRouteHandler={checkCartRouteHandler}
                  checkWishlistAction={checkWishlistAction}
                  checkWishlistActionHandler={checkWishlistActionHandler}
                />
              )) :
                <div className="empty-products">
                  <h1 className="empty-msg">No Products Available</h1>
                </div>
            }
          </div>
        </section>
      </main>
      {/* <div className="filter-mobile-container">
        <button className="btn btn-outline-primary btn-filter">Filter</button>
        <button><i className={`fas ${mobileFilter ? "fa-times" : "fa-angle-up"}`}></i></button>
      </div> */}
    </div>
  );
};





export { ProductsListing };
