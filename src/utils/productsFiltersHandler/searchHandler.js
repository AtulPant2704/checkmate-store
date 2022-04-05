const searchHandler = (products, searchQuery) => {
  if (searchQuery === "") {
    return products;
  }
  return products.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

export { searchHandler };
