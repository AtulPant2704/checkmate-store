import "./CartBill.css";

const CartBill = () => {
    return (
        <section className="cart-bill-container checkout-bill">
            <div className="bill-card">
                <h2 className="card-title">ORDER DETAILS</h2>
                <div className="items-container">
                    <div className="items-container">
                        <h3 className="align-center card-div-title">PURCHASED ITEMS</h3>
                        <div className="items-price">
                            <p className="item-type">Item</p>
                            <p className="item-type-price">Price</p>
                        </div>
                        <div className="items-price">
                            <p className="item-type">Apple (2 item)</p>
                            <p className="item-type-price">₹ 5000</p>
                        </div>
                        <div className="items-price">
                            <p className="item-type">Mango (2 item)</p>
                            <p className="item-type-price">₹ 5000</p>
                        </div>
                    </div>
                    <div className="items-container">
                        <h3 className="align-center card-div-title">Billing</h3>
                        <div className="items-price">
                            <p className="item-type">Discount</p>
                            <p className="item-type-price">₹ 500</p>
                        </div>
                        <div className="items-price">
                            <p className="item-type">Delivery</p>
                            <p className="item-type-price">FREE</p>
                        </div>
                    </div>
                </div>
                <div className="items-price total-price-container">
                    <p className="item-type total-price">Total Amount</p>
                    <p className="item-type-price total-price-value">₹ 4500</p>
                </div>
                <button className="order-btn ecommerce-btn">PLACE ORDER</button>
            </div>
        </section>
    )
}

export { CartBill };
