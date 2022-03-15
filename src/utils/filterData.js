const filterData = (data, { onlyInStock, fastDelivery, rangeValue }) => {
    if (onlyInStock) {
        data = data.filter((item) => item.inStock);
    }
    if (fastDelivery) {
        data = data.filter((item) => item.fastDelivery);
    }

    data = data.filter((item) => Number(item.price) <= Number(rangeValue));

    return data;
};

export { filterData };