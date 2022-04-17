import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart } from "../../../../context";
import { removeFromCartHandler, addNewOrderHandler } from "../../../../utils";
import { brandName } from "../../../../assets";
import "./CartBill.css";

const CartBill = ({ selectedAddress, itemsPrice, totalPrice }) => {
    const navigate = useNavigate();
    const {
        cartState: { cart },
        cartDispatch,
    } = useCart();
    const {
        authState: { user, token },
        authDispatch
    } = useAuth();

    const checkAddress = () => selectedAddress ? proceedToPay() : toast.warning("Please Select the Address");

    const getOrderObj = () => {
        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const today = new Date();
        const newDate = weekday[today.getDay()] + " " + month[(today.getMonth())] + " " + String(today.getDate()) + " " + String(today.getFullYear());
        const order = {
            orderedProducts: cart,
            totalPrice: totalPrice,
            itemsPrice: itemsPrice,
            discountedPrice: itemsPrice - totalPrice,
            deliveryAddress: selectedAddress,
            date: newDate
        }
        return order;
    }

    const proceedToPay = async () => {
        const response = await loadSdk();
        if (response) {
            const options = {
                key: "rzp_test_5XcBERcG2QQhg2",
                key_id: "rzp_test_5XcBERcG2QQhg2",
                key_secret: "NoFPHQhwxAcw4fOuZSzC6ucl",
                amount: totalPrice * 100,
                currency: "INR",
                name: "CheckMate Store",
                description: "Thank you for shopping with us",
                image: brandName,
                callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
                prefill: {
                    name: user.firstName,
                    email: user.email,
                    contact: "9999999999",
                },
                notes: { address: "Razorpay Corporate Office" },
                theme: { color: "#202528" },
                handler: function (response) {
                    const order = getOrderObj();
                    addNewOrderHandler(order, authDispatch, token);
                    cart.map((item) =>
                        removeFromCartHandler(item._id, token, cartDispatch, "empty")
                    );
                    navigate("/products");
                    toast.success("Order Placed Successfully");
                },
            };
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
            rzp1.on("payment.failed", function (response) {
                toast.error("Something went wrong", response.error.code);
            });
        } else {
            toast.error("Something went wrong");
        }
    };

    const loadSdk = async () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

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
                            <p className="item-type-price">₹ {itemsPrice - totalPrice}</p>
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
                <button className="order-btn ecommerce-btn" onClick={checkAddress}>PROCEED TO PAY</button>
            </div>
        </section>
    )
}

export { CartBill };
