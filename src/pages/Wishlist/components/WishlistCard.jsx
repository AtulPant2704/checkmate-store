const WishlistCard = ({ cardId, cardImg, cardAlt, cardTitle, cardPrice, callRemoveFromWishlistHandler, callMoveToCartHandler }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={cardImg} alt={cardAlt} className="img-responsive" />
        <button onClick={() => callRemoveFromWishlistHandler(cardId)}>
          <i className="fas fa-heart"></i>
        </button>
      </div>
      <div className="card-details">
        <p className="card-title">{cardTitle}</p>
        <h3 className="card-price">₹ {cardPrice}</h3>
      </div>
      <button className="ecommerce-btn" onClick={() => callMoveToCartHandler(cardId)}>Move to Cart</button>
    </div>
  );
};

export { WishlistCard };
