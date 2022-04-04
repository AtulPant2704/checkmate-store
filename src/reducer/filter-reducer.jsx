const filterReducer = (state, action) => {
  const { ratingValue, inStock, rangeValue, categoryType } = action.payload;

  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.type };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.type };

    case "CATEGORY_FILTER":
      if (!state.category.includes(action.payload.categoryType)) {
        return { ...state, category: [...state.category, categoryType] };
      }
      const filterCategories = state.category.filter(
        (item) => item !== categoryType
      );
      return { ...state, category: filterCategories };

    case "RANGE_FILTER":
      return { ...state, rangeValue: rangeValue };

    case "RATING":
      return { ...state, ratingValue: ratingValue };

    case "IN_STOCK":
      return { ...state, inStock: inStock };

    case "RESET":
      return {
        sortBy: "",
        category: [],
        ratingValue: "",
        inStock: false,
        rangeValue: 10000,
      };

    default:
      return { ...state };
  }
};

export { filterReducer };
