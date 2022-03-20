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
  checkWishlistRouteHandler
}) => {

  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={productImg} alt={productAlt} className="img-responsive" />
        <i className={`${checkWishlistAction(productId) === "Remove" ? "fas" : "far"} fa-heart`} onClick={() => checkWishlistRouteHandler(productId)}></i>
        {productBadge !== "None" ? <span className="card-badge">{productBadge}</span> : ""}
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
      <button className="cart-btn ecommerce-btn" onClick={() => checkCartRouteHandler(productId)}>{checkCartAction(productId)}</button>
    </div >
  );
};

export { ProductCard };
