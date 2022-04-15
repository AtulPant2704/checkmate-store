import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../../context";
import { addNewAddressHandler, updateAddressHandler } from "../../../../utils";
import "./AddressModal.css";

const AddressModal = ({ editAddress, setEditAddress, showAddressModal, setShowAddressModal }) => {
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        name: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        mobile: "",
    })
    const { authState: { token }, authDispatch } = useAuth();

    const dummyAddress = {
        name: "Guest User",
        street: "House No. 111, MG Road, Indiranagar",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        zipCode: "245789",
        mobile: "9814235478",
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setAddress({ ...address, [name]: value });
    };

    const callAddNewAddressHandler = () => {
        if (token) {
            if (editAddress) {
                updateAddressHandler(address, token, authDispatch);
                setEditAddress("");
            }
            else {
                addNewAddressHandler(address, authDispatch, token);
            }
            setShowAddressModal(false);
        }
        else {
            navigate("/login");
            toast.warning("You're not logged in");
        }
    }

    const checkEditAddress = () => {
        if (editAddress) {
            setAddress(editAddress);
        }
    }

    useEffect(() => checkEditAddress(), []);

    return (
        <>
            {showAddressModal ?
                <section>
                    <div className="address-backdrop" onClick={() => setShowAddressModal(false)}></div>
                    <div className="address-modal">
                        <div class="form-wrapper address-form">
                            <h2 class="form-heading">Add New Address</h2>
                            <form>
                                <input
                                    type="text"
                                    name="name"
                                    value={address.name}
                                    onChange={changeHandler}
                                    placeholder="Enter your name"
                                    required
                                />
                                <input
                                    type="text"
                                    name="street"
                                    value={address.street}
                                    onChange={changeHandler}
                                    placeholder="Enter house no, street or colony"
                                    required
                                />
                                <input
                                    type="text"
                                    name="city"
                                    value={address.city}
                                    onChange={changeHandler}
                                    placeholder="Enter City"
                                    required
                                />
                                <input
                                    type="text"
                                    name="state"
                                    value={address.state}
                                    onChange={changeHandler}
                                    placeholder="Enter State"
                                    required
                                />
                                <input
                                    type="text"
                                    name="country"
                                    value={address.country}
                                    onChange={changeHandler}
                                    placeholder="Enter Country"
                                    required
                                />
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={address.zipCode}
                                    onChange={changeHandler}
                                    placeholder="Enter Zip Code"
                                    required
                                />
                                <input
                                    type="number"
                                    name="mobile"
                                    value={address.mobile}
                                    onChange={changeHandler}
                                    placeholder="Enter Mobile Number"
                                    required
                                />
                            </form>
                            <div className="form-action-btns">
                                <button
                                    className="btn btn-solid-primary action-btn save-btn"
                                    onClick={callAddNewAddressHandler}>
                                    Save
                                </button>
                                <button
                                    className="btn btn-outline-primary action-btn dummy-btn"
                                    onClick={() => setAddress(dummyAddress)}>
                                    Dummy Address
                                </button>
                                <button
                                    className="btn btn-outline-primary action-btn cancel-btn"
                                    onClick={() => setShowAddressModal(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                : null}
        </>
    )
}

export { AddressModal };
