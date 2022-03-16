const ProductCard = ({
  productImg,
  productAlt,
  productBadge,
  productTitle,
  productPrice,
  productRating
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
        <h3 className="card-price">₹ {productPrice}</h3>
        <div className="rating-container">
          {ratingArray.map(item => (
            <i className={`${item <= Number(productRating) ? "fas" : "far"} fa-star`} ></i>
          ))}
        </div>
      </div>
      <button className="cart-btn ecommerce-btn">Add to Cart</button>
    </div >
  );
};

export { ProductCard };
