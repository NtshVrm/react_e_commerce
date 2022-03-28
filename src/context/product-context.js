import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/product-reducer";
import {
  getSortedData,
  getFilterRating,
  getFilterGender,
  getFilterCategory,
  getFilterRange,
} from "../utils/product-utils";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    sortBy: "popular",
    gender: null,
    category: [],
    rating: null,
    range_sort: null,
  });

  const sortedData = getSortedData(state.products, state.sortBy);
  const ratingData = getFilterRating(sortedData, state.rating);
  const genderData = getFilterGender(ratingData, state.gender);
  const categoryData = getFilterCategory(genderData, state.category);
  const rangeData = getFilterRange(categoryData, state.range_sort);

  const finalData = rangeData;

  return (
    <ProductContext.Provider value={{ finalData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
