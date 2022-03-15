import "./ProductsListing.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";

const ProductsListing = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <main>
        <section className="filter-product-container">
          <div className="filter-container">
            <Filters />
          </div>

          <div className="product-container">
            {products.map(product => (
              <ProductCard
                productImg={product.image}
                productAlt={product.title}
                productBadge={product.badge}
                productTitle={product.title}
                productPrice={product.price}
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
