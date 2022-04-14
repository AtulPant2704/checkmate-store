import { useState } from "react";
import { AddressModal } from "./AddressModal";
import "./Address.css";

const Address = ({ setShowAddressModal }) => {
    return (
        <>
            <div className="address-container">
                <div className="address">
                    <h3>Guest User</h3>
                    <p>House No. 111, MG Road, Indiranagar</p>
                    <p>Bangalore, Karnataka, 245789</p>
                    <p>India</p>
                    <p>Mobile: 9814235478</p>
                    <div className="address-action-btns">
                        <button className="btn btn-solid-primary btn-edit" onClick={() => setShowAddressModal(true)}>Edit</button>
                        <button className="btn btn-outline-primary btn-remove">Remove</button>
                    </div>
                </div>
                <button
                    className="btn btn-text-primary new-address-btn"
                    onClick={() => setShowAddressModal(true)}>
                    <i class="fa-solid fa-plus"></i> Add New Address
                </button>
            </div>
        </>
    )
}

export { Address };
