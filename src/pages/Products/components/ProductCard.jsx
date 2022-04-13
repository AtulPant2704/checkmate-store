import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
  _id,
  image,
  badge,
  title,
  price,
  rating,
  checkCartAction,
  checkCartRouteHandler,
  checkWishlistAction,
  checkWishlistActionHandler,
}) => {
  const [cartButtonLoader, setCartButtonLoader] = useState(false);
  const [wishlistDisable, setWishlistDisable] = useState(false);
  const navigate = useNavigate();

  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <div className="product-card" onClick={() => navigate(`/products/${_id}`)}>
      <div className="img-container">
        <img src={image} alt={title} className="img-responsive" />
        <button
          disabled={wishlistDisable}
          onClick={(e) => checkWishlistActionHandler(e, _id, setWishlistDisable)}
        >
          <i
            className={`${
              checkWishlistAction(_id) ? "fas" : "far"
              } fa-heart`}
          ></i>
        </button>
        {badge === "Out of Stock" ? (
          <span className="card-badge">{badge}</span>
        ) : (
            ""
          )}
      </div>
      <div className="card-details">
        <p className="card-title">{title}</p>
        <div className="price-rating-container">
          <h3 className="card-price">₹ {price}</h3>
          <div className="rating-container">
            {ratingArray.map((item) => (
              <i
                key={item}
                className={`${item <= Number(rating) ? "fas" : "far"} fa-star`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <button
        className={`ecommerce-btn ${
          badge === "Out of Stock" ? "out-of-stock-btn" : ""
          }`}
        disabled={badge === "Out of Stock" ? true : cartButtonLoader}
        onClick={(e) => checkCartRouteHandler(e, _id, setCartButtonLoader)}
      >
        {badge === "Out of Stock" ? (
          "Out of Stock"
        ) : cartButtonLoader ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
              checkCartAction(_id)
            )}
      </button>
    </div>
  );
};

export { ProductCard };
