import { useEffect } from "react";
import { useAuth } from "../../../../context";
import { getAddressesHandler, removeAddressHandler } from "../../../../utils";
import "./Address.css";

const Address = ({ setShowAddressModal, setEditAddress }) => {
    const { authState: { token, addresses }, authDispatch } = useAuth();

    const updateAddress = (address) => {
        setEditAddress(address);
        setShowAddressModal(true);
    }

    const addNewAddress = () => {
        setEditAddress(null);
        setShowAddressModal(true);
    }

    useEffect(() => getAddressesHandler(token, authDispatch), []);

    return (
        <>
            {addresses ?
                <div className="address-container">
                    {addresses.map(item => (
                        <div className="address" key={item._id}>
                            <h3>{item.name}</h3>
                            <p>{item.street}</p>
                            <p>{item.city}, {item.state}, {item.zipCode}</p>
                            <p>{item.country}</p>
                            <p>Mobile: {item.mobile}</p>
                            <div className="address-action-btns">
                                <button
                                    className="btn btn-solid-primary btn-edit"
                                    onClick={() => updateAddress(item)}>
                                    Edit
                            </button>
                                <button
                                    className="btn btn-outline-primary btn-remove"
                                    onClick={() => removeAddressHandler(item._id, token, authDispatch)}>
                                    Remove
                            </button>
                            </div>
                        </div>
                    ))}
                    <button
                        className="btn btn-text-primary new-address-btn"
                        onClick={addNewAddress}>
                        <i class="fa-solid fa-plus"></i> Add New Address
                </button>
                </div>
                : null}
        </>
    )
}

export { Address };
