import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Navbar, Footer, AddressModal } from "../../components";
import { UserDetails } from "./components/UserDetails/UserDetails"
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [editAddress, setEditAddress] = useState(null);

  return (
    <>
      {showAddressModal ? <AddressModal editAddress={editAddress} setEditAddress={setEditAddress} showAddressModal={showAddressModal} setShowAddressModal={setShowAddressModal} /> : null}
      <Navbar />
      <main>
        <h1 className="profile-page-title align-center">Account</h1>
        <section className="profile-page">
          <div className="profile-tabs">
            <button
              className={`tab profile-tab ${location.pathname === "/profile" ? "tab-active" : ""}`}
              onClick={() => navigate("/profile")}>
              Profile
            </button>
            <button
              className={`tab address-tab ${location.pathname === "/profile/address" ? "tab-active" : ""}`}
              onClick={() => navigate("address")}>
              My Address
            </button>
            <button
              className={`tab order-tab ${location.pathname === "/profile/orders" ? "tab-active" : ""}`}
              onClick={() => navigate("orders")}>
              My Orders
            </button>
          </div>
          {location.pathname === "/profile" ? <UserDetails /> : null}
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Profile };
