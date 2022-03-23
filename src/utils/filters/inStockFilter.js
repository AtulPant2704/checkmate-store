const inStockFilter = (data, { inStock }) => {
    if (inStock) {
        return data.filter(item => item.badge === "In Stock");
    }
    return data;
}

export { inStockFilter };
