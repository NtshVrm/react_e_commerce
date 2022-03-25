import "./ProductListing.css";

export function ListingHeader({ heading }) {
  return (
    <div className="listing-header">
      <div className="listing-heading">{heading}</div>
      <label
        htmlFor="sort"
        className={`sort-text ${heading === "Wishlist" ? "hidden" : ""}`}
      >
        Sort
        <select name="sort" id="sort" className="sort">
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
