import { Navbar, Footer, AddressModal } from "../../components";
import { AddressSelect } from "./components/AddressSelect/AddressSelect";
import { CartBill } from "./components/CartBill/CartBill";
import "./Checkout.css";

const Checkout = () => {
    return (
        <>
            <Navbar />
            <main>
                <h1 className="page-title">Checkout</h1>
                <section className="bill-address-container">
                    <AddressSelect />
                    <CartBill />
                </section>
            </main>
            <Footer />
        </>
    )
}

export { Checkout };
