const ProductCard = ({
  productId,
  productImg,
  productAlt,
  productBadge,
  productTitle,
  productPrice,
  productRating,
  checkAction,
  checkRouteHandler
}) => {

  const ratingArray = [1, 2, 3, 4, 5];

  return (
    <div className="product-card">
      <div className="img-container">
        <img src={productImg} alt={productAlt} className="img-responsive" />
        <i className="far fa-heart"></i>
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
      <button className="cart-btn ecommerce-btn" onClick={() => checkRouteHandler(productId)}>{checkAction(productId)}</button>
    </div >
  );
};

export { ProductCard };
