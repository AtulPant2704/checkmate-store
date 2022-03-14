import "./Wishlist.css";
import {
  boardImg,
  pieceImg,
  bookImg,
  clockImg
} from "../Homepage/components/imgExports";
import { WishlistCard } from "./components/WishlistCard";

const Wishlist = () => {
  return (
    <main>
      <h2 className="align-center page-title">My Wishlist</h2>

      <section className="wishlist-container">
        <WishlistCard
          cardImg={boardImg}
          cardAlt={"chess-dark-brown-light-pieces"}
          cardTitle={"Hard Bud Rose Wood Series Chess Pieces"}
          cardPrice={"₹ 5000"}
        />
        <WishlistCard
          cardImg={pieceImg}
          cardAlt={"chess-dark-brown-light-pieces"}
          cardTitle={"Hard Bud Rose Wood Series Chess Pieces"}
          cardPrice={"₹ 5000"}
        />
        <WishlistCard
          cardImg={bookImg}
          cardAlt={"chess-dark-brown-light-pieces"}
          cardTitle={"Hard Bud Rose Wood Series Chess Pieces"}
          cardPrice={"₹ 5000"}
        />
        <WishlistCard
          cardImg={clockImg}
          cardAlt={"chess-dark-brown-light-pieces"}
          cardTitle={"Hard Bud Rose Wood Series Chess Pieces"}
          cardPrice={"₹ 5000"}
        />
      </section>
    </main>
  );
};

export { Wishlist };
