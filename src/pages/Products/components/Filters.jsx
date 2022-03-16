import { useFilter } from "../../../hooks";
import { PriceRangeFilter } from "./Filters/PriceRangeFilter";
import { SortPriceFilter } from "./Filters/SortPriceFilter";
import { CategoryFilter } from "./Filters/CategoryFilter";
import { RatingFilter } from "./Filters/RatingFilter";
import { InStockFilter } from "./Filters/InStockFilter";

const Filters = () => {
  const { state, dispatch } = useFilter();

  return (
    <div>

      <div className="filter-clear-heading">
        <h2 className="filter-heading">Filters</h2>
        <button className="text-underline clear-filters-btn btn btn-text-primary gray-text" onClick={() => dispatch({ type: "RESET", payload: {} })}>
          Clear
          </button>
      </div>

      <PriceRangeFilter {...state} dispatch={dispatch} />

      <SortPriceFilter {...state} dispatch={dispatch} />

      <CategoryFilter {...state} dispatch={dispatch} />

      <RatingFilter {...state} dispatch={dispatch} />

      <InStockFilter {...state} dispatch={dispatch} />

    </div>
  );
};

export { Filters };
