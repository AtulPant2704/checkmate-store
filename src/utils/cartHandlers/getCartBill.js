const getCartBill = (cart, couponType = "") => {
  const cartQuantity = cart.reduce((acc, curr) => acc + Number(curr.qty), 0);
  const itemsPrice = cart.reduce(
    (acc, curr) => acc + Number(curr.price * curr.qty),
    0
  );
  let totalPrice = itemsPrice;
  if (couponType) {
    totalPrice = totalPrice * (1 - Number(couponType) / 100);
  }
  return { cartQuantity, itemsPrice, totalPrice };
};

export { getCartBill };
