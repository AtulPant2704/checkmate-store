import "./Home.css";
import { ProductsCategory } from "./components/ProductsCategory";
import { boardImg, pieceImg, bookImg, clockImg } from "./components/imgExports";

const Home = () => {
  return (
    <main>
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-heading">CheckMate</h1>
          <h1 className="intro-heading intro-colored">Chess</h1>
          <p className="intro-para">Best Chess Sets, Books & Clocks for Sale</p>
          <a href="./product/product.html">
            <button className="btn btn-solid-primary">Shop Now</button>
          </a>
        </div>
      </section>

      <section className="category-items">
        <h2 className="intro-heading align-center">Featured Categories</h2>
        <div className="category-cards">
          <ProductsCategory
            cardType={"card-chess-board"}
            cardImg={boardImg}
            cardAlt={"board-brown-white"}
            cardTitle={"Chess Board"}
          />
          <ProductsCategory
            cardType={"card-chess-piece"}
            cardImg={pieceImg}
            cardAlt={"chess-black-brown-pieces"}
            cardTitle={"Chess Pieces"}
          />
          <ProductsCategory
            cardType={"card-chess-book"}
            cardImg={bookImg}
            cardAlt={"chess-fianchetto-book"}
            cardTitle={"Chess Book"}
          />
          <ProductsCategory
            cardType={"card-chess-clock"}
            cardImg={clockImg}
            cardAlt={"chess-clock"}
            cardTitle={"Chess Clock"}
          />
        </div>
      </section>
    </main>
  );
};

export { Home };
