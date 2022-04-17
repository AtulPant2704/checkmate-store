import { useState } from "react";
import { Navbar, Footer, AddressModal } from "../../components";
import { UserDetails } from "./components/UserDetails/UserDetails"
import { Address } from "./components/Address/Address";
import { Orders } from "./components/Orders/Orders";
import "./Profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
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
              className={`tab profile-tab ${activeTab === "profile" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("profile")}>
              Profile
            </button>
            <button
              className={`tab address-tab ${activeTab === "address" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("address")}>
              My Address
            </button>
            <button
              className={`tab order-tab ${activeTab === "order" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("order")}>
              My Orders
            </button>
          </div>
          {activeTab === "profile" ? <UserDetails /> : activeTab === "address" ? <Address setEditAddress={setEditAddress} setShowAddressModal={setShowAddressModal} /> : <Orders />}
        </section>
      </main>
      <Footer />
    </>
  );
};

export { Profile };
