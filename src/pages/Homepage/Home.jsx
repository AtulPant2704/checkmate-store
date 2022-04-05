import { Link } from "react-router-dom";
import { Navbar, Footer } from "../../components";
import { ProductsCategory } from "./components/ProductsCategory";
import { boardImg, pieceImg, bookImg, clockImg } from "../../assets";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="intro-section">
          <div className="intro-content">
            <h1 className="intro-heading">CheckMate</h1>
            <h1 className="intro-heading intro-colored">Chess</h1>
            <p className="intro-para">
              Best Chess Sets, Books & Clocks for Sale
            </p>
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
              categoryName={"board"}
            />
            <ProductsCategory
              cardImg={pieceImg}
              cardTitle={"Chess Pieces"}
              categoryName={"pieces"}
            />
            <ProductsCategory
              cardImg={bookImg}
              cardTitle={"Chess Book"}
              categoryName={"books"}
            />
            <ProductsCategory
              cardImg={clockImg}
              cardTitle={"Chess Clock"}
              categoryName={"clock"}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Home };
