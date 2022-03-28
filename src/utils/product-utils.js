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

function getFilterRange(productsList, range_sort) {
  if (range_sort) {
    return productsList.filter(
      (item) => parseInt(item.discountPrice) <= range_sort
    );
  }
  return productsList;
}

export {
  getFilterCategory,
  getFilterGender,
  getFilterRating,
  getSortedData,
  getFilterRange,
};
