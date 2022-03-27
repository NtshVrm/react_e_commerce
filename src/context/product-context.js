import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/product-reducer";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    sortBy: null,
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
      default:
        return productsList;
    }
  }

  const sortedData = getSortedData(state.products, state.sortBy);

  return (
    <ProductContext.Provider value={{ sortedData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
