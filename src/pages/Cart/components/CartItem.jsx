const CartItem = ({ cartImg, cartAlt, cartTitle, cartPrice }) => {
    return (
      <div className="cart-card">
        <div className="img-container">
          <img src={cartImg} alt={cartAlt} className="img-responsive" />
        </div>
        <div className="card-details">
          <p className="card-title">{cartTitle}</p>
          <h3 className="card-price">{cartPrice}</h3>
          <div className="quantity-controls">
            <button className="btn-control decrease-btn">
              <i className="fas fa-minus"></i>
            </button>
            <p className="quantity">2</p>
            <button className="btn-control increase-btn">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <button className="wishlist-btn ecommerce-btn">Move to Wishlist</button>
        </div>
      </div>
    );
  };
  
  export { CartItem };
  