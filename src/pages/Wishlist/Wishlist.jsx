import "./Wishlist.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { WishlistCard } from "./components/WishlistCard";
import { useWishlist, useAuth } from "../../hooks";
import { getWishlistItemsService } from "../../services/wishlistServices/getWishlistItems.service";
import { removeFromWishlistHandler } from "../../utils";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { authState } = useAuth();
  const { token } = authState;
  const { wishlist } = wishlistState;


  const callRemoveFromWishlistHandler = (_id) => {
    removeFromWishlistHandler(_id, token, wishlistDispatch)
  }

  const getWishlistItems = async () => {
    try {
      const response = await getWishlistItemsService(token);
      if (response.status === 200) {
        wishlistDispatch({ type: "GET_WISHLIST", payload: response.data.wishlist })
      } else {
        throw new Error();
      }
    }
    catch (error) {
      alert(error);
    }
  }

  useEffect(() => getWishlistItems(), [])

  return (
    <main className="empty-cart">
      {wishlist.length !== 0 ?
        <>
          <h2 className="align-center page-title">My Wishlist</h2>

          <section className="wishlist-container">
            {wishlist.map(item => (
              <WishlistCard
                key={item._id}
                cardId={item._id}
                cardImg={item.image}
                cardAlt={item.title}
                cardTitle={item.title}
                cardPrice={item.price}
                callRemoveFromWishlistHandler={callRemoveFromWishlistHandler}
              />
            ))}
          </section>
        </>
        : <>
          <h2>Your Wishlist is empty</h2>
          <Link to="/products">
            <button className="btn btn-solid-primary btn-link-products">Start Exploring</button></Link>
        </>}

    </main>
  );
};

export { Wishlist };
