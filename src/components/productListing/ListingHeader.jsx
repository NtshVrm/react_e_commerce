import "./ProductListing.css";
import { useProduct } from "../../context/product-context";

export function ListingHeader({ heading }) {
  const { dispatch } = useProduct();

  return (
    <div className="listing-header">
      <div className="listing-heading">{heading}</div>
      <label
        htmlFor="sort"
        className={`sort-text ${
          heading === "Wishlist" || heading === "Cart" ? "hidden" : ""
        }`}
      >
        Sort
        <select
          name="sort"
          id="sort"
          className="sort"
          onChange={(event) =>
            dispatch({ type: "SORT", payload: event.target.value })
          }
        >
          <option value="popular" defaultChecked>
            Most Popular
          </option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </label>
    </div>
  );
}
