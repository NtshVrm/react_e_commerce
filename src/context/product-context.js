import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/product-reducer";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    sortBy: "popular",
    gender: null,
    category: null,
    rating: null,
  });

  function getSortedData(productsList, sortBy) {
    switch (sortBy) {
      case "priceHighToLow": {
        return productsList.sort((a, b) => b.price - a.price);
      }
      case "priceLowToHigh": {
        return productsList.sort((a, b) => a.price - b.price);
      }
      case "newest": {
        return productsList.sort((a, b) => b.badge - a.badge);
      }
      case "popular": {
        return productsList.sort((a, b) => a.id - b.id);
      }
      default:
        return productsList;
    }
  }

  function getFilterRating(productsList, rating) {
    switch (rating) {
      case "4 star and above": {
        return productsList.filter((item) => item.rating >= 4);
      }
      case "3 star and above": {
        return productsList
          .filter((item) => item.rating >= 3)
          .sort((a, b) => a.rating - b.rating);
      }
      case "2 star and above": {
        return productsList
          .filter((item) => item.rating >= 2)
          .sort((a, b) => a.rating - b.rating);
      }
      case "1 star and above": {
        return productsList
          .filter((item) => item.rating >= 1)
          .sort((a, b) => a.rating - b.rating);
      }
      default:
        return productsList;
    }
  }

  const sortedData = getSortedData(state.products, state.sortBy);
  const ratingData = getFilterRating(sortedData, state.rating);

  const finalData = ratingData;

  return (
    <ProductContext.Provider value={{ finalData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
