import "./CouponModal.css";

const CouponModal = ({
  setCouponModalOpen,
  totalPrice,
  couponType,
  setCouponType,
}) => {
  const applyCoupon = (event) =>
    event.target.checked
      ? setCouponType(event.target.value)
      : setCouponType("");

  return (
    <>
      <div className="backdrop" onClick={() => setCouponModalOpen(false)}></div>
      <section className="coupon-modal">
        <h3 className="text-underline">Select Coupon</h3>
        <button
          className="modal-close-btn"
          onClick={() => setCouponModalOpen(false)}
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="coupon-container">
          <input
            type="checkbox"
            id="discount10"
            value="10"
            disabled={totalPrice <= 5000}
            checked={couponType === "10"}
            onChange={applyCoupon}
          />
          <label
            htmlFor="discount10"
            className={totalPrice <= 5000 ? "gray-text" : ""}
          >
            Get 10% discount on order above ₹5000
          </label>
        </div>
        <div className="coupon-container">
          <input
            type="checkbox"
            id="discount15"
            value="15"
            disabled={totalPrice <= 8000}
            checked={couponType === "15"}
            onChange={applyCoupon}
          />
          <label
            htmlFor="discount15"
            className={totalPrice <= 8000 ? "gray-text" : ""}
          >
            Get 15% discount on order above ₹8000
          </label>
        </div>
      </section>
    </>
  );
};

export { CouponModal };
