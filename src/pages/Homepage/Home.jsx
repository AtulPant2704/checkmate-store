import "./Home.css";
import { Link } from "react-router-dom";
import { ProductsCategory } from "./components/ProductsCategory";
import { boardImg, pieceImg, bookImg, clockImg } from "../../assets";

const Home = () => {
  return (
    <main>
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="intro-heading">CheckMate</h1>
          <h1 className="intro-heading intro-colored">Chess</h1>
          <p className="intro-para">Best Chess Sets, Books & Clocks for Sale</p>
          <Link to="/products">
            <button className="btn btn-solid-primary">Shop Now</button>
          </Link>
        </div>
      </section>

      <section className="category-items">
        <h2 className="intro-heading align-center">Featured Categories</h2>
        <div className="category-cards">
          <ProductsCategory
            cardImg={boardImg}
            cardTitle={"Chess Board"}
            categoryName={"chess-board"}
          />
          <ProductsCategory
            cardImg={pieceImg}
            cardTitle={"Chess Pieces"}
            categoryName={"chess-pieces"}
          />
          <ProductsCategory
            cardImg={bookImg}
            cardTitle={"Chess Book"}
            categoryName={"chess-books"}
          />
          <ProductsCategory
            cardImg={clockImg}
            cardTitle={"Chess Clock"}
            categoryName={"chess-clock"}
          />
        </div>
      </section>
    </main>
  );
};

export { Home };
