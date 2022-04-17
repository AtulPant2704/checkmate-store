import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { Navbar, Footer, AddressModal } from "../../components";
import { AddressSelect } from "./components/AddressSelect/AddressSelect";
import { CartBill } from "./components/CartBill/CartBill";
import { getAddressesHandler } from "../../utils";
import "./Checkout.css";

const Checkout = () => {
    const [selectedAddress, setSelectedAddres] = useState(null)
    const { authState: { token, addresses }, authDispatch } = useAuth();

    useEffect(() => getAddressesHandler(token, authDispatch), []);

    return (
        <>
            <Navbar />
            <main>
                <h1 className="page-title">Checkout</h1>
                <section className="bill-address-container">
                    <AddressSelect addresses={addresses} setSelectedAddres={setSelectedAddres} />
                    <CartBill selectedAddress={selectedAddress} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export { Checkout };
