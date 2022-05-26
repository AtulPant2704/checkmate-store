const PriceRangeFilter = ({ rangeValue, filterDispatch }) => {
  return (
    <div className="filter-type">
      <h3 className="filter-type-heading">Price</h3>
      <div className="filter-type-container">
        <label className="slider-label" htmlFor="slider">
          ₹0 - ₹{rangeValue}
        </label>
        <input
          type="range"
          min="0"
          max="10000"
          value={rangeValue}
          className="slider"
          onChange={(event) =>
            filterDispatch({
              type: "RANGE_FILTER",
              payload: { rangeValue: event.target.value },
            })
          }
        />
      </div>
    </div>
  );
};

export { PriceRangeFilter };
