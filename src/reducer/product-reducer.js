const productReducer = (state, action) => {
  const initial = state;
  switch (action.type) {
    case "DATA": {
      return { ...state, products: action.payload };
    }
    case "SORT": {
      return { ...state, sortBy: action.payload };
    }
    case "FILTER": {
      switch (action.payload) {
        case "Gender": {
          return { ...state, gender: action.filterType };
        }
        case "Category": {
          const tempCategory = state.category.includes(action.filterType);
          return tempCategory
            ? {
                ...state,
                category: state.category.filter((item) => {
                  return item !== action.filterType;
                }),
              }
            : { ...state, category: [...state.category, action.filterType] };
        }
        case "Rating": {
          return { ...state, rating: action.filterType };
        }
      }
    }
    case "RANGE_SORT": {
      return { ...state, range_sort: action.payload };
    }
    case "CLEAR": {
      return {
        ...state,
        sortBy: "popular",
        gender: "",
        category: [],
        rating: "",
      };
    }
    default:
      return state;
  }
};

export { productReducer };
