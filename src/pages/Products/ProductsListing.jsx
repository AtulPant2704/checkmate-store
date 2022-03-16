import "./ProductsListing.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";
import { useFilter } from "../../hooks";
import { sortData, categoryFilter, priceFilter, ratingFilter, inStockFilter } from "../../utils"

const ProductsListing = () => {
  const [products, setProducts] = useState([]);
  const { state } = useFilter();

  const loadProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => loadProducts(), [])

  const sortedData = sortData(products, state);
  const categoryFilteredData = categoryFilter(sortedData, state);
  const ratingFilteredData = ratingFilter(categoryFilteredData, state);
  const inStockFilteredData = inStockFilter(ratingFilteredData, state);
  const priceFilteredData = priceFilter(inStockFilteredData, state);

  console.log(priceFilteredData);

  return (
    <div>
      <main>
        <section className="filter-product-container">
          <div className="filter-container">
            <Filters />
          </div>

          <div className="product-container">
            {priceFilteredData.map(product => (
              <ProductCard
                key={product.id}
                productImg={product.image}
                productAlt={product.title}
                productBadge={product.badge}
                productTitle={product.title}
                productPrice={product.price}
                productRating={product.rating}
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
