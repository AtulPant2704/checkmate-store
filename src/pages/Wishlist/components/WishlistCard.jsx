import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WishlistCard = ({
  _id,
  image,
  badge,
  title,
  price,
  callRemoveFromWishlistHandler,
  callMoveToCartHandler,
}) => {
  const navigate = useNavigate();
  const [cartButtonLoader, setCartButtonLoader] = useState(false);
  const [wishlistButtonDisable, setWishlistButtonDisable] = useState(false);

  return (
    <div className="product-card" onClick={() => navigate(`/products/${_id}`)}>
      <div className="img-container">
        <img src={image} alt={title} className="img-responsive" />
        <button disabled={wishlistButtonDisable} onClick={(e) => callRemoveFromWishlistHandler(e, _id, setWishlistButtonDisable)}>
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
        onClick={(e) => callMoveToCartHandler(e, _id, setCartButtonLoader, setWishlistButtonDisable)}
      >
        {badge === "Out of Stock" ? "Out of Stock" : "Move to Cart"}
      </button>
    </div>
  );
};

export { WishlistCard };
