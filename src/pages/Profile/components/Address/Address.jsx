import { useAuth } from "../../../../context";
import "./Address.css";

const Address = ({ setShowAddressModal }) => {
    const { authState: { addresses } } = useAuth();

    return (
        <>
            <div className="address-container">
                {addresses.map(item => (
                    <div className="address" key={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.street}</p>
                        <p>{item.city}, {item.state}, {item.zipCode}</p>
                        <p>{item.country}</p>
                        <p>Mobile: {item.mobile}</p>
                        <div className="address-action-btns">
                            <button className="btn btn-solid-primary btn-edit" onClick={() => setShowAddressModal(true)}>Edit</button>
                            <button className="btn btn-outline-primary btn-remove">Remove</button>
                        </div>
                    </div>
                ))}
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
