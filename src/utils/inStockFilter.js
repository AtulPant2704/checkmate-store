const inStockFilter = (data, { inStock }) => {
    if (inStock) {
        return data.filter(item => item.badge === "None");
    }
    return data;
}

export { inStockFilter };