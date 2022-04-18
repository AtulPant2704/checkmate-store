import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context";
import { getOrdersHandler } from "../../../../utils";
import "./Orders.css"

const Orders = () => {
    const navigate = useNavigate();
    const { authState: { token, orders }, authDispatch } = useAuth();

    useEffect(() => getOrdersHandler(token, authDispatch), []);

    return (
        <>
            {
                orders.length > 0 ? orders.map(order => (
                    <section className="cart-bill-container order-container" key={order._id}>
                        <div className="bill-card">
                            <h2 className="card-title order-card-title">Order Confirmed</h2>
                            <p className="order-date gray-text">{order.date}</p>
                            <p className="order-id">Order Id:- #{order._id}</p>
                            {order.orderedProducts.map(product => (
                                <div className="order-card" key={product._id}>
                                    <div className="img-container" onClick={() => navigate(`/products/${product._id}`)}>
                                        <img src={product.image} alt={product.title} className="img-responsive" />
                                    </div>
                                    <div className="card-details">
                                        <h3 className="card-title">{product.title}</h3>
                                        <p className="card-price">₹ {product.price * product.qty}</p>
                                        <p className="card-qty">Qty: {product.qty}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="items-container delivery-address">
                                <div className="items">
                                    <h3 className="align-left">Delivery Address:</h3>
                                    <h3 className="address-title">{order.deliveryAddress.name}</h3>
                                    <p>{order.deliveryAddress.street}, {order.deliveryAddress.city}, {order.deliveryAddress.state}, {order.deliveryAddress.country}, {order.deliveryAddress.zipCode}</p>
                                    <p>Mobile: {order.deliveryAddress.mobile}</p>
                                </div>
                            </div>
                            <div className="items-container bill-container">
                                <h3 className="align-left">Price Details:</h3>
                                <div className="items-price">
                                    <p className="item-type">Total MRP</p>
                                    <p className="item-type-price">₹ {order.itemsPrice}</p>
                                </div>
                                <div className="items-price">
                                    <p className="item-type">Total Discount</p>
                                    <p className="item-type-price">₹ {order.discountedPrice}</p>
                                </div>
                                <div className="items-price total-price-container">
                                    <p className="item-type total-price">Total Amount</p>
                                    <p className="item-type-price total-price-value">₹ {order.totalPrice}</p>
                                </div>
                            </div>
                        </div>
                    </section >
                ))
                    : <h2>No orders to display</h2>}
        </>
    )
}

export { Orders };
