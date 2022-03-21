const CartItem = ({ cartId, cartImg, cartAlt, cartTitle, cartPrice, cartQuantity, callRemoveFromCartHandler, callUpdateCartHandler, callMoveToWishlistHandler }) => {
  return (
    <div className="cart-card">
      <div className="img-container">
        <img src={cartImg} alt={cartAlt} className="img-responsive" />
      </div>
      <div className="card-details">
        <p className="card-title">{cartTitle}</p>
        <h3 className="card-price">₹ {cartPrice}</h3>
        <div className="quantity-controls">
          <button className="btn-control decrease-btn" onClick={() => cartQuantity <= 1 ? callRemoveFromCartHandler(cartId) : callUpdateCartHandler(cartId, "decrement")}>
            <i className={`fas ${cartQuantity === 1 ? "fa-trash-alt" : "fa-minus"}`}></i>
          </button>

          <p className="quantity">{cartQuantity}</p>
          <button className="btn-control increase-btn" onClick={() => callUpdateCartHandler(cartId, "increment")}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="action-btns">
          <button className="wishlist-btn ecommerce-btn" onClick={() => callMoveToWishlistHandler(cartId)}>Move to Wishlist</button>
          <button className="wishlist-btn ecommerce-btn cart-remove-btn" onClick={() => callRemoveFromCartHandler(cartId)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
