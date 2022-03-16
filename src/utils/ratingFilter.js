const ratingFilter = (data, { ratingValue }) => {
    if (ratingValue === "") {
        return data;
    }
    return data.filter((item) => Number(item.rating) >= Number(ratingValue));
}

export { ratingFilter };