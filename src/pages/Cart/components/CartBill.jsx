const CartBill = ({
  cartItem,
  itemPrice,
  cartDiscount,
  cartDelivery,
  cartAmount,
}) => {
  return (
    <div className="bill-card">
      <h2 className="card-title">PRICE DETAILS</h2>
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
      <button className="order-btn ecommerce-btn">PLACE ORDER</button>
    </div>
  );
};

export { CartBill };
