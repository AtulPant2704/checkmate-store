import "./Products.css";
import { Filters } from "./components/Filters";
import { ProductCard } from "./components/ProductCard";
import {
  boardImg,
  pieceImg,
  bookImg,
  clockImg
} from "../Homepage/components/imgExports";

const Products = () => {
  return (
    <div>
      <main>
        <section class="filter-product-container">
          <div class="filter-container">
            <Filters />
          </div>

          <div class="product-container">
            <ProductCard
              productImg={boardImg}
              productAlt={"chess-dark-brown-light-pieces"}
              productBadge={"Sold Out"}
              productTitle={"Hard Bud Rose Wood Series Chess Pieces"}
              productPrice={"₹ 5000"}
            />
            <ProductCard
              productImg={pieceImg}
              productAlt={"chess-dark-brown-light-pieces"}
              productBadge={"Sold Out"}
              productTitle={"Hard Bud Rose Wood Series Chess Pieces"}
              productPrice={"₹ 5000"}
            />
            <ProductCard
              productImg={bookImg}
              productAlt={"chess-dark-brown-light-pieces"}
              productBadge={"Sold Out"}
              productTitle={"Hard Bud Rose Wood Series Chess Pieces"}
              productPrice={"₹ 5000"}
            />
            <ProductCard
              productImg={clockImg}
              productAlt={"chess-dark-brown-light-pieces"}
              productBadge={"Sold Out"}
              productTitle={"Hard Bud Rose Wood Series Chess Pieces"}
              productPrice={"₹ 5000"}
            />
            <ProductCard
              productImg={clockImg}
              productAlt={"chess-dark-brown-light-pieces"}
              productBadge={"Sold Out"}
              productTitle={"Hard Bud Rose Wood Series Chess Pieces"}
              productPrice={"₹ 5000"}
            />
          </div>
        </section>
      </main>
      <div class="filter-mobile-container">
        <button class="btn btn-outline-primary btn-filter">Filter</button>
        <button class="btn btn-outline-primary btn-sort">Sort</button>
      </div>
    </div>
  );
};

export { Products };
