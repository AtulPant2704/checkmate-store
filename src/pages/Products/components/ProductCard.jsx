const ProductCard = ({
    productImg,
    productAlt,
    productBadge,
    productTitle,
    productPrice
  }) => {
    return (
      <div className="product-card">
        <div className="img-container">
          <img src={productImg} alt={productAlt} className="img-responsive" />
          <i className="far fa-heart"></i>
          <span className="card-badge">{productBadge}</span>
        </div>
        <div className="card-details">
          <p className="card-title">{productTitle}</p>
          <h3 className="card-price">₹ {productPrice}</h3>
          <button className="cart-btn ecommerce-btn">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export { ProductCard };
  