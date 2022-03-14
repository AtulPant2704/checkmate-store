const WishlistCard = ({ cardImg, cardAlt, cardTitle, cardPrice }) => {
    return (
      <div className="product-card">
        <div className="img-container">
          <img src={cardImg} alt={cardAlt} className="img-responsive" />
          <i className="fas fa-heart"></i>
        </div>
        <div className="card-details">
          <p className="card-title">{cardTitle}</p>
          <h3 className="card-price">{cardPrice}</h3>
          <button className="ecommerce-btn">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export { WishlistCard };
  