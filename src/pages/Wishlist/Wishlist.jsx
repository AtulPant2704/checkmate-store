import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWishlist, useAuth, useCart } from "../../context";
import {
  getWishlistItemsHandler,
  removeFromWishlistHandler,
  moveToCartHandler,
} from "../../utils";
import { Navbar, Footer, Loader } from "../../components";
import { WishlistCard } from "./components/WishlistCard";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlistLoader, setWishlistLoader] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const {
    wishlistState: { wishlist },
    wishlistDispatch,
  } = useWishlist();
  const { cartState, cartDispatch } = useCart();

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

  const getWishlistItems = () => {
    getWishlistItemsHandler(token, wishlistDispatch, setWishlistLoader);
    window.scrollTo(0, 0);
  };

  useEffect(() => getWishlistItems(), []);

  return (
    <>
      <Navbar />
      <main className="empty-cart">
        {wishlist.length !== 0 ? (
          <>
            {wishlistLoader ? (
              <Loader />
            ) : (
              <>
                <h2 className="align-center page-title">My Wishlist</h2>

                <section className="wishlist-container">
                  {wishlist.map((item) => (
                    <WishlistCard
                      key={item._id}
                      {...item}
                      callRemoveFromWishlistHandler={
                        callRemoveFromWishlistHandler
                      }
                      callMoveToCartHandler={callMoveToCartHandler}
                    />
                  ))}
                </section>
              </>
            )}
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
