import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/product-reducer";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    sortBy: "popular",
    gender: null,
    category: [],
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
        return productsList.filter((item) => item.rating >= 3);
      }
      case "2 star and above": {
        return productsList.filter((item) => item.rating >= 2);
      }
      case "1 star and above": {
        return productsList.filter((item) => item.rating >= 1);
      }
      default:
        return productsList;
    }
  }

  function getFilterGender(productsList, gender) {
    switch (gender) {
      case "Men": {
        return productsList.filter((item) => item.gender === "male");
      }
      case "Women": {
        return productsList.filter((item) => item.gender === "female");
      }
      case "Unisex": {
        return productsList.filter((item) => item.gender === "unisex");
      }
      default:
        return productsList;
    }
  }

  function getFilterCategory(productsList, category) {
    if (category.length > 0) {
      return productsList.filter((item) => category.includes(item.category));
    }
    return productsList;
  }

  const sortedData = getSortedData(state.products, state.sortBy);
  const ratingData = getFilterRating(sortedData, state.rating);
  const genderData = getFilterGender(ratingData, state.gender);
  const categoryData = getFilterCategory(genderData, state.category);

  const finalData = categoryData;

  return (
    <ProductContext.Provider value={{ finalData, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
