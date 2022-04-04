import { useState, useEffect } from "react";
import { getCategoriesHandler } from "../../../../utils";

const CategoryFilter = ({ category, filterDispatch }) => {
  const [serverCategories, setServerCategories] = useState([]);

  useEffect(() => getCategoriesHandler(setServerCategories), []);

  const capitaliseCategoryName = (categoryName) => {
    return "Chess " + categoryName[0].toUpperCase() + categoryName.slice(1);
  };

  return (
    <div className="filter-type">
      <h3 className="filter-type-heading">Category</h3>

      {serverCategories.length > 0 ? (
        serverCategories.map(({ _id, categoryName }) => (
          <div className="filter-type-container" key={_id}>
            <input
              type="checkbox"
              id={categoryName}
              checked={category.includes(categoryName)}
              onChange={() =>
                filterDispatch({
                  type: "CATEGORY_FILTER",
                  payload: { categoryType: categoryName },
                })
              }
            />
            <label htmlFor={categoryName}>
              {capitaliseCategoryName(categoryName)}
            </label>
          </div>
        ))
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export { CategoryFilter };
