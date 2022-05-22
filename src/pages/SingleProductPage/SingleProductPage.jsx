import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useCart, useWishlist } from "../../context";
import { getSingleProductHandler, addToCartHandler, addToWishlistHandler, removeFromWishlistHandler } from "../../utils"
import { Navbar, Footer, Loader } from "../../components";
import "./SingleProductPage.css"

const SingleProductPage = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [loader, setLoader] = useState(false);
    const [cartButtonLoader, setCartButtonLoader] = useState(false);
    const [wishlistDisable, setWishlistDisable] = useState(false);
    const { authState: { token } } = useAuth();
    const { cartState: { cart }, cartDispatch } = useCart();
    const { wishlistState: { wishlist }, wishlistDispatch } = useWishlist();

    const ratingArray = [1, 2, 3, 4, 5];

    const checkCartAction = (_id) => {
        const item = cart.some((item) => item._id === _id);
        return item ? "Go to Cart" : "Add to Cart";
    };

    const callAddToCartHandler = (_id) => {
        if (token) {
            addToCartHandler(product, cartDispatch, token, setCartButtonLoader);
        } else {
            navigate("/login");
            toast.warning("You're not logged in");
        }
    };

    const checkCartRouteHandler = (_id) => {
        return checkCartAction(_id) === "Add to Cart"
            ? callAddToCartHandler(_id)
            : navigate("/cart");
    };

    const checkWishlistAction = (_id) => wishlist.some((item) => item._id === _id);

    const callAddToWishlistHandler = (_id, setWishlistDisable) => {
        if (token) {
            addToWishlistHandler(
                product,
                wishlistDispatch,
                token,
                setWishlistDisable
            );
        } else {
            navigate("/login");
            toast.warning("You're not logged in");
        }
    };

    const checkWishlistActionHandler = (_id, setWishlistDisable) => {
        return checkWishlistAction(_id)
            ? removeFromWishlistHandler(_id, token, wishlistDispatch, setWishlistDisable)
            : callAddToWishlistHandler(_id, setWishlistDisable);
    };

    useEffect(() => getSingleProductHandler(productId, setProduct, setLoader), [])

    return (
        <>
            <Navbar />
            <main>
                {loader ? <Loader /> :
                    <>
                        <div className="single-product-page two-col-grid-container">
                            <div className="img-container">
                                <img src={product.image} alt={product.title} className="img-responsive product-image" />
                            </div>
                            <div className="product-details">
                                <div className="product-info">
                                    <h2 className="product-title">{product.title}</h2>
                                    <div className="rating-container">
                                        {ratingArray.map((item) => (
                                            <i
                                                key={item}
                                                className={`${
                                                    item <= Number(product.rating)
                                                        ? 'fas fa-star'
                                                        : item === Math.ceil(Number(product.rating))
                                                            ? 'fas fa-star-half-stroke'
                                                            : 'far fa-star'
                                                    }`}
                                            ></i>
                                        ))}
                                        <span className="gray-text">({product.reviewers} reviews)</span>
                                    </div>
                                    <h2 className="product-price">₹ {product.price}/-</h2>
                                    <p className="product-price-info">Inclusive of all taxes</p>
                                </div>
                                <ul className="product-labels">
                                    <li className="label">
                                        <i className="fas fa-truck flip-image"></i>
                                        <span>Fast delivery available</span>
                                    </li>
                                    <li className="label">
                                        <i className="fas fa-check-square"></i>
                                        <span>Price displayed is inclusive of GST</span>
                                    </li>
                                    {product.badge === "Out of Stock" ?
                                        <li className="label">
                                            <i className="far fa-calendar-times"></i>
                                            <span>Out of stock</span>
                                        </li> :
                                        <li className="label">
                                            <i className="far fa-calendar-check"></i>
                                            <span>Currently in stock</span>
                                        </li>}
                                </ul>
                                <div className="action-btns">
                                    <button
                                        className={`btn btn-solid-primary action-btn cart-action-btn ${
                                            product.badge === "Out of Stock" ? "out-of-stock-btn" : ""}`}
                                        disabled={product.badge === "Out of Stock" ? true : cartButtonLoader}
                                        onClick={() => checkCartRouteHandler(product._id)}>
                                        {product.badge === "Out of Stock" ? ("Out of Stock") : checkCartAction(product._id)}
                                    </button>
                                    <button
                                        className="btn btn-outline-primary action-btn wishlist-action-btn"
                                        disabled={wishlistDisable}
                                        onClick={() => checkWishlistActionHandler(product._id, setWishlistDisable)}>
                                        {checkWishlistAction(product._id) ? "Added to Wishlist" : "Add to Wishlist"}
                                    </button>
                                </div>
                            </div>
                        </div></>}
            </main>
            <Footer />
        </>
    )
}

export { SingleProductPage }
