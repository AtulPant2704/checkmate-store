const CartSummary = ({
  cartItem,
  itemPrice,
  cartDiscount,
  cartDelivery,
  cartAmount,
  setCouponModalOpen,
  setCheckout
}) => {

  return (
    <div className="bill-card">
      <h2 className="card-title">PRICE DETAILS</h2>
      <button
        className="apply-coupon-btn"
        onClick={() => setCouponModalOpen(true)}
      >
        <i className="fas fa-tags"></i> Apply Coupon
      </button>
      <div className="items-container">
        <div className="items-price">
          <p className="item-type">Price ({cartItem} item)</p>
          <p className="item-type-price">₹ {itemPrice}</p>
        </div>
        <div className="items-price">
          <p className="item-type">Discount</p>
          <p className="item-type-price">₹ {cartDiscount}</p>
        </div>
        <div className="items-price">
          <p className="item-type">Delivery</p>
          <p className="item-type-price">{cartDelivery}</p>
        </div>
      </div>
      <div className="items-price total-price-container">
        <p className="item-type total-price">Total Amount</p>
        <p className="item-type-price total-price-value">₹ {cartAmount}</p>
      </div>
      <p className="cart-savings">You saved ₹ {itemPrice - cartAmount}</p>
      <button className="order-btn ecommerce-btn" onClick={() => setCheckout(true)}>
        PLACE ORDER
      </button>
    </div>
  );
};

export { CartSummary };
