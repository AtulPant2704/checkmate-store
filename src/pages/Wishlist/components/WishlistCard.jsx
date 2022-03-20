const WishlistCard = ({ cardId, cardImg, cardAlt, cardTitle, cardPrice, callRemoveFromWishlistHandler }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={cardImg} alt={cardAlt} className="img-responsive" />
        <i className="fas fa-heart" onClick={() => callRemoveFromWishlistHandler(cardId)}></i>
      </div>
      <div className="card-details">
        <p className="card-title">{cardTitle}</p>
        <h3 className="card-price">₹ {cardPrice}</h3>
        <button className="ecommerce-btn">Move to Cart</button>
      </div>
    </div>
  );
};

export { WishlistCard };
