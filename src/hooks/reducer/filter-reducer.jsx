const filterReducer = (state, action) => {
    const { onlyInStock, fastDelivery, rangeValue } = action.payload;

    switch (action.type) {
        case "SORT_LOW_TO_HIGH":
            return { ...state, lowToHigh: true, highToLow: false };

        case "SORT_HIGH_TO_LOW":
            return { ...state, lowToHigh: false, highToLow: true };

        case "ONLY-IN-STOCK":
            return { ...state, onlyInStock: onlyInStock };

        case "FAST-DELIVERY":
            return { ...state, fastDelivery: fastDelivery };

        case "RANGE-FILTER":
            return { ...state, rangeValue: rangeValue };

        case "RESET":
            return {
                lowToHigh: false,
                highToLow: false,
                onlyInStock: false,
                fastDelivery: false,
                rangeValue: 1000
            };

        default:
            return { ...state };
    }
};

export { filterReducer };
