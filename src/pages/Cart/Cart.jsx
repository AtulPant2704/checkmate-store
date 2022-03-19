import "./Cart.css";
import { pieceImg, bookImg, clockImg } from "../../assets";
import { CartItem } from "./components/CartItem";
import { CartBill } from "./components/CartBill";

const Cart = () => {
  return (
    <main>
      <h2 className="align-center page-title">My Cart</h2>

      <section className="cart-bill-container">
        <div className="cart-container">
          <CartItem
            cartImg={pieceImg}
            cartAlt={"chess-dark-brown-light-pieces"}
            cartTitle={"Hard Bud Rose Wood Series Chess Pieces"}
            cartPrice={"₹ 5000"}
          />
          <CartItem
            cartImg={bookImg}
            cartAlt={"chess-dark-brown-light-pieces"}
            cartTitle={"Hard Bud Rose Wood Series Chess Pieces"}
            cartPrice={"₹ 5000"}
          />
          <CartItem
            cartImg={clockImg}
            cartAlt={"chess-dark-brown-light-pieces"}
            cartTitle={"Hard Bud Rose Wood Series Chess Pieces"}
            cartPrice={"₹ 5000"}
          />
        </div>

        <div className="bill-container">
          <CartBill
            cartItem={2}
            itemPrice={5000}
            cartDiscount={500}
            cartDelivery={"FREE"}
            cartAmount={4500}
          />
        </div>
      </section>
    </main>
  );
};

export { Cart };
