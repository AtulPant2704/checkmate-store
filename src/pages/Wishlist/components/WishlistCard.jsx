import { useState } from "react";

const WishlistCard = ({
  _id,
  image,
  badge,
  title,
  price,
  callRemoveFromWishlistHandler,
  callMoveToCartHandler,
}) => {
  const [cartButtonLoader, setCartButtonLoader] = useState(false);

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={image} alt={title} className="img-responsive" />
        <button onClick={() => callRemoveFromWishlistHandler(_id)}>
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <h3 className="card-price">₹ {price}</h3>
      </div>
      <button
        className={`ecommerce-btn ${
          badge === "Out of Stock" ? "out-of-stock-btn" : ""
        }`}
        disabled={badge === "Out of Stock" ? true : cartButtonLoader}
        onClick={() => callMoveToCartHandler(_id, setCartButtonLoader)}
      >
        {badge === "Out of Stock" ? "Out of Stock" : "Move to Cart"}
      </button>
    </div>
  );
};

export { WishlistCard };
