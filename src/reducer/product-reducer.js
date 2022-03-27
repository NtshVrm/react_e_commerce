const productReducer = (state, action) => {
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
          return { ...state, category: action.filterType };
        }
        case "Rating": {
          return { ...state, rating: action.filterType };
        }
      }
    }
    default:
      return state;
  }
};

export { productReducer };
