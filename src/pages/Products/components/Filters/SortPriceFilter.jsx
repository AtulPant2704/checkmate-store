const SortPriceFilter = ({ sortBy, filterDispatch }) => {
  return (
    <div className="filter-type">
      <h3 className="filter-type-heading">Sort by</h3>

      {/* Sort Low to High Products */}
      <div className="filter-type-container">
        <input
          type="radio"
          id="low-high"
          name="radio-sort"
          checked={sortBy === "LOW_TO_HIGH"}
          onChange={() =>
            filterDispatch({
              type: "LOW_TO_HIGH",
              payload: {},
            })
          }
        />
        <label htmlFor="low-high">Price - Low to High</label>
      </div>

      {/* Sort High to Low Products */}
      <div className="filter-type-container">
        <input
          type="radio"
          id="high-low"
          name="radio-sort"
          checked={sortBy === "HIGH_TO_LOW"}
          onChange={() =>
            filterDispatch({
              type: "HIGH_TO_LOW",
              payload: {},
            })
          }
        />
        <label htmlFor="high-low">Price - High to Low</label>
      </div>
    </div>
  );
};

export { SortPriceFilter };
