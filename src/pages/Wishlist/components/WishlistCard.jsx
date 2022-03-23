import {useState} from "react";

const WishlistCard = ({ cardId, cardImg, cardAlt,cardBadge, cardTitle, cardPrice, callRemoveFromWishlistHandler, callMoveToCartHandler }) => {
  
  const [cartButtonLoader, setCartButtonLoader] = useState(false);

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
      <button className={`ecommerce-btn ${cardBadge === "Out of Stock" ?        "out-of-stock-btn" : ""}`} 
          disabled={cardBadge === "Out of Stock" ? true : cartButtonLoader} 
          onClick={() => callMoveToCartHandler(cardId,setCartButtonLoader)}>{cardBadge === "Out of Stock" ? "Out of Stock" : "Move to Cart"}
      </button>
    </div>
  );
};

export { WishlistCard };
