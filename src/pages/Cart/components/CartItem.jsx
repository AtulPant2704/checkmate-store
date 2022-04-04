import { useState } from "react";

const CartItem = ({
  _id,
  image,
  title,
  price,
  qty,
  callRemoveFromCartHandler,
  callUpdateCartHandler,
  callMoveToWishlistHandler,
}) => {
  const [wishlistDisable, setWishlistDisable] = useState(false);

  return (
    <div className="cart-card">
      <div className="img-container">
        <img src={image} alt={title} className="img-responsive" />
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <h3 className="card-price">₹ {price}</h3>
        <div className="quantity-controls">
          <button
            className="btn-control decrease-btn"
            onClick={() =>
              qty <= 1
                ? callRemoveFromCartHandler(_id)
                : callUpdateCartHandler(_id, "decrement")
            }
          >
            <i className={`fas ${qty === 1 ? "fa-trash-alt" : "fa-minus"}`}></i>
          </button>

          <p className="quantity">{qty}</p>
          <button
            className="btn-control increase-btn"
            onClick={() => callUpdateCartHandler(_id, "increment")}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="action-btns">
          <button
            disabled={wishlistDisable}
            className="wishlist-btn ecommerce-btn"
            onClick={() => callMoveToWishlistHandler(_id, setWishlistDisable)}
          >
            Move to Wishlist
          </button>
          <button
            className="wishlist-btn ecommerce-btn cart-remove-btn"
            onClick={() => callRemoveFromCartHandler(_id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
