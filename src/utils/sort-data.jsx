const sortData = (data, { lowToHigh, highToLow }) => {
    let tempData = [...data];

    if (lowToHigh) {
        tempData = tempData.sort((a, b) => a.price - b.price);
    } else if (highToLow) {
        tempData = tempData.sort((a, b) => b.price - a.price);
    }

    return tempData;
};

export { sortData };