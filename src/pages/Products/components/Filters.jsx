import { useFilter } from "../../../hooks";
import { PriceRangeFilter } from "./Filters/PriceRangeFilter";
import { SortPriceFilter } from "./Filters/SortPriceFilter";
import { CategoryFilter } from "./Filters/CategoryFilter";
import { RatingFilter } from "./Filters/RatingFilter";
import { InStockFilter } from "./Filters/InStockFilter";

const Filters = ({ setMobileFilter }) => {
  const { filterState, filterDispatch } = useFilter();

  const closeFilterMobileHandler = () => setMobileFilter(false);

  return (
    <div>

      <div className="filter-clear-heading">
        <h2 className="filter-heading">Filters</h2>
        <button className="text-underline clear-filters-btn btn btn-text-primary gray-text" onClick={() => filterDispatch({ type: "RESET", payload: {} })}>
          Clear
          </button>
        <button className="fas fa-times filter-close-btn" onClick={closeFilterMobileHandler}></button>
      </div>

      <PriceRangeFilter {...filterState} filterDispatch={filterDispatch} />

      <SortPriceFilter {...filterState} filterDispatch={filterDispatch} />

      <CategoryFilter {...filterState} filterDispatch={filterDispatch} />

      <RatingFilter {...filterState} filterDispatch={filterDispatch} />

      <InStockFilter {...filterState} filterDispatch={filterDispatch} />

    </div>
  );
};

export { Filters };
