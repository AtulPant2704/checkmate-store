import "./AddressSelect.css";

const AddressSelect = ({ addresses, setSelectedAddres }) => {

    return (
        <section className="address-section">
            {addresses.map(item => (
                <div className="address" key={item._id}>
                    <input type="radio" name="address" id={item._id} onChange={() => setSelectedAddres(item)}></input>
                    <label htmlFor={item._id}>
                        <h3>{item.name}</h3>
                        <p>{item.street} {item.city}, {item.state}, {item.country}, {item.zipCode}</p>
                        <p>Mobile: {item.mobile}</p>
                    </label>
                </div>
            ))}
            <button className="btn btn-text-primary new-address-btn"><i className="fa-solid fa-plus"></i> Add New Address</button>
        </section>
    )
};

export { AddressSelect };
