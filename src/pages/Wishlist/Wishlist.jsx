import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useWishlist, useAuth, useCart } from "../../context";
import {
  getWishlistItemsHandler,
  removeFromWishlistHandler,
  moveToCartHandler,
} from "../../utils";
import { Navbar, Footer } from "../../components";
import { WishlistCard } from "./components/WishlistCard";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { cartState, cartDispatch } = useCart();
  const { authState } = useAuth();
  const { token } = authState;
  const { wishlist } = wishlistState;

  const callRemoveFromWishlistHandler = (_id) => {
    removeFromWishlistHandler(_id, token, wishlistDispatch);
  };

  const callMoveToCartHandler = (_id, setCartButtonLoader) => {
    const item = wishlist.find((item) => item._id === _id);
    moveToCartHandler(
      _id,
      item,
      token,
      cartState,
      cartDispatch,
      setCartButtonLoader
    );
    removeFromWishlistHandler(_id, token, wishlistDispatch);
  };

  useEffect(() => getWishlistItemsHandler(token, wishlistDispatch), []);

  return (
    <>
      <Navbar />
      <main className="empty-cart">
        {wishlist.length !== 0 ? (
          <>
            <h2 className="align-center page-title">My Wishlist</h2>

            <section className="wishlist-container">
              {wishlist.map((item) => (
                <WishlistCard
                  key={item._id}
                  {...item}
                  cardId={item._id}
                  cardImg={item.image}
                  cardAlt={item.title}
                  cardBadge={item.badge}
                  cardTitle={item.title}
                  cardPrice={item.price}
                  callRemoveFromWishlistHandler={callRemoveFromWishlistHandler}
                  callMoveToCartHandler={callMoveToCartHandler}
                />
              ))}
            </section>
          </>
        ) : (
          <>
            <h2>Your Wishlist is empty</h2>
            <Link to="/products">
              <button className="btn btn-solid-primary btn-link-products">
                Start Exploring
              </button>
            </Link>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export { Wishlist };
