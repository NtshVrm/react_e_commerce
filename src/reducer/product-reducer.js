const productReducer = (state, action) => {
  switch (action.type) {
    case "DATA": {
      return { ...state, products: action.payload };
    }
    case "SORT": {
      return { ...state, sortBy: action.payload };
    }
    default:
      return state;
  }
};

export { productReducer };
