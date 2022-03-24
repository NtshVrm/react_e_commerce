import "./ProductListing.css";

export function ListingHeader() {
  return (
    <div className="listing-header">
      <div className="listing-heading">Products</div>
      <label htmlFor="sort" className="sort-text">
        Sort
        <select name="sort" id="sort" className="sort">
          <option value="popular" defaultChecked>
            Most Popular
          </option>
          <option value="rating">Best Rating</option>
          <option value="newest">Newest</option>
        </select>
      </label>
    </div>
  );
}
