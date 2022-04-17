import { useCart } from "../../../../context";
import "./CartBill.css";

const CartBill = ({ selectedAddress, itemsPrice, totalPrice }) => {
    const { cartState: { cart } } = useCart();

    return (
        <section className="cart-bill-container checkout-bill">
            <div className="bill-card">
                <h2 className="card-title">ORDER DETAILS</h2>
                <div className="items-container">
                    <div className="items">
                        <h3 className="align-center card-div-title">PURCHASED ITEMS</h3>
                        <div className="items-price">
                            <p className="item-type">Item</p>
                            <p className="item-type-price">Price</p>
                        </div>
                        {cart.map(item => (
                            <div className="items-price" key={item._id}>
                                <p className="item-type">{item.title}
                                    <span>({item.qty} x ₹ {item.price})</span>
                                </p>
                                <p className="item-type-price">₹ {item.qty * item.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="items">
                        <h3 className="align-center card-div-title">Billing</h3>
                        <div className="items-price">
                            <p className="item-type">Total MRP</p>
                            <p className="item-type-price">₹ {itemsPrice}</p>
                        </div>
                        <div className="items-price">
                            <p className="item-type">Total Discount</p>
                            <p className="item-type-price">₹ {totalPrice - itemsPrice}</p>
                        </div>
                        <div className="items-price">
                            <p className="item-type">Delivery</p>
                            <p className="item-type-price">FREE</p>
                        </div>
                    </div>
                </div>
                <div className="items-price total-price-container">
                    <p className="item-type total-price">Total Amount</p>
                    <p className="item-type-price total-price-value">₹ {totalPrice}</p>
                </div>
                {selectedAddress ?
                    <div className="items-container">
                        <div className="items">
                            <h3 className="align-center card-div-title">Delivery Address</h3>
                            <h3 className="address-title">{selectedAddress.name}</h3>
                            <p>{selectedAddress.street}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.country}, {selectedAddress.zipCode}</p>
                            <p>Mobile: {selectedAddress.mobile}</p>
                        </div>
                    </div>
                    : null}
                <button className="order-btn ecommerce-btn">PROCEED TO PAY</button>
            </div>
        </section>
    )
}

export { CartBill };
