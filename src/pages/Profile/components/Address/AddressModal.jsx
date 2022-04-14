import "./AddressModal.css";

const AddressModal = ({ showAddressModal, setShowAddressModal }) => {
    return (
        <>
            {showAddressModal ?
                <section>
                    <div className="address-backdrop" onClick={() => setShowAddressModal(false)}></div>
                    <div className="address-modal">
                        <div class="form-wrapper address-form">
                            <h2 class="form-heading">Add New Address</h2>
                            <form>
                                <input type="text" placeholder="Enter your name" required />
                                <input type="text" placeholder="Enter house no, street or colony" required />
                                <input type="text" placeholder="Enter City" required />
                                <input type="text" placeholder="Enter State" required />
                                <input type="text" placeholder="Enter Country" required />
                                <input type="text" placeholder="Enter Zip Code" required />
                                <input type="text" placeholder="Enter Mobile Number" required />
                                <input type="text" placeholder="India" required />
                            </form>
                            <div className="form-action-btns">
                                <button className="btn btn-solid-primary action-btn save-btn">Save</button>
                                <button className="btn btn-outline-primary action-btn dummy-btn">Dummy Address</button>
                                <button className="btn btn-outline-primary action-btn cancel-btn" onClick={() => setShowAddressModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </section>
                : null}
        </>
    )
}

export { AddressModal };
