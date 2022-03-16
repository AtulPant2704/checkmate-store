const priceFilter = (data, { rangeValue }) => {
    return data.filter((item) => Number(item.price) <= Number(rangeValue));
}

export { priceFilter };