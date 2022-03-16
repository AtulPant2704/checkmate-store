const sortData = (data, { sortBy }) => {
    let tempData = [...data];

    if (sortBy === "LOW_TO_HIGH") {
        tempData = tempData.sort((a, b) => a.price - b.price);
    }
    if (sortBy === "HIGH_TO_LOW") {
        tempData = tempData.sort((a, b) => b.price - a.price);
    }

    return tempData;
};

export { sortData };