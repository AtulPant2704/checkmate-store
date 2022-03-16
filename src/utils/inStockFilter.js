const inStockFilter = (data, { inStock }) => {
    console.log(" In inStcok");
    if (inStock) {
        return data.filter(item => item.badge === "None");
    }
    return data;
}

export { inStockFilter };