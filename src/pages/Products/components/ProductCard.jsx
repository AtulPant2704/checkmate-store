import { useState } from "react";

const ProductCard = ({
  productId,
  productImg,
  productAlt,
  productBadge,
  productTitle,
  productPrice,
  productRating,
  checkCartAction,
  checkCartRouteHandler,
  checkWishlistAction,
  checkWishlistActionHandler
}) => {

  const [cartButtonLoader, setCartButtonLoader] = useState(false);
  const [wishlistDisable,setWishlistDisable] = useState(false);

  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={productImg} alt={productAlt} className="img-responsive" />
        <button disabled={wishlistDisable} onClick={() => checkWishlistActionHandler(productId,setWishlistDisable)}>
          <i className={`${checkWishlistAction(productId) === "Remove" ? "fas" : "far"} fa-heart`}></i>
        </button>
        {productBadge === "Out of Stock" ? <span className="card-badge">{productBadge}</span> : ""}
      </div>
      <div className="card-details">
        <p className="card-title">{productTitle}</p>
        <div className="price-rating-container">
          <h3 className="card-price">₹ {productPrice}</h3>
          <div className="rating-container">
            {ratingArray.map(item => (
              <i key={item} className={`${item <= Number(productRating) ? "fas" : "far"} fa-star`} ></i>
            ))}
          </div>
        </div>
      </div>
      <button className={`ecommerce-btn ${productBadge === "Out of Stock" ? "out-of-stock-btn" : ""}`}  
          disabled={productBadge === "Out of Stock" ? true : cartButtonLoader} onClick={() => checkCartRouteHandler(productId, setCartButtonLoader)}>{productBadge === "Out of Stock" ? "Out of Stock" : cartButtonLoader ? <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> : checkCartAction(productId)}
      </button>
    </div >
  );
};

export { ProductCard };
