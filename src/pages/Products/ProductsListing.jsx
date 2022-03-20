import "./ProductsListing.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";
import { useFilter, useCart, useAuth } from "../../hooks";
import { getProductsService } from "../../services";
import { sortData, categoryFilter, priceFilter, ratingFilter, inStockFilter, addToCartHandler } from "../../utils"

const ProductsListing = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { cart } = cartState;
  const { filterState } = useFilter();

  const checkAction = (_id) => {
    const item = cart.find(item => item._id === _id);
    return item ? "Go to Cart" : "Add to Cart";
  }

  const checkRouteHandler = (_id) => {
    const product = products.find(item => item._id === _id);
    return checkAction(_id) === "Add to Cart" ? addToCartHandler(product, cartDispatch, authState.token) : navigate("/cart")
  }

  const loadProducts = async () => {
    try {
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
          <div className="filter-container">
            <Filters />
          </div>

          <div className="product-container">
            {sortedData.map(product => (
              <ProductCard
                key={product._id}
                productId={product._id}
                productImg={product.image}
                productAlt={product.title}
                productBadge={product.badge}
                productTitle={product.title}
                productPrice={product.price}
                productRating={product.rating}
                checkAction={checkAction}
                checkRouteHandler={checkRouteHandler}
              />
            ))}
          </div>
        </section>
      </main>
      <div className="filter-mobile-container">
        <button className="btn btn-outline-primary btn-filter">Filter</button>
        <button className="btn btn-outline-primary btn-sort">Sort</button>
      </div>
    </div>
  );
};

export { ProductsListing };
