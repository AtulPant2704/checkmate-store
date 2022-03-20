const getCartBill = (cart) => {
    const cartQuantity = cart.reduce((acc, curr) => acc + Number(curr.qty), 0);
    const itemsPrice = cart.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0);
    const totalPrice = itemsPrice - 500;
    return { cartQuantity, itemsPrice, totalPrice };
}

export { getCartBill };


