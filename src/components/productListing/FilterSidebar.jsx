import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export function FilterSidebar() {
  const [filterClosed, setfilterClosed] = useState(false);

  return (
    <div className="filter-container">
      <div className="filter-heading">
        <div>Filters</div>
        <div className="clear">Clear</div>
      </div>

      <div className="filter-item item-rating">
        <div className="filter-item-header">
          <div className="filter-title">Ratings</div>
        </div>

        <div className="price-slider">
          <input type="range" min="$10" max="$100" className="slider" />
        </div>
      </div>
      {/* FILTER ITEMS */}
      <div
        className={`item-price ${
          filterClosed ? "filter-item" : "filter-item-closed"
        }`}
      >
        <div className="filter-item-header">
          <div className="filter-title">Price</div>
          <div
            className="filter-icon"
            onClick={() => setfilterClosed((prev) => !prev)}
          >
            {filterClosed ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </div>
        <div className={`filter-list ${filterClosed ? "" : "hidden"}`}>
          <div className="filter-option">
            <input type="radio" name="sort" />
            <label>Low to High</label>
          </div>
          <div className="filter-option">
            <input type="radio" name="sort" />
            <label>High to Low</label>
          </div>
        </div>
      </div>

      <div className={`${filterClosed ? "filter-item" : "filter-item-closed"}`}>
        <div className="filter-item-header">
          <div className="filter-title">Gender</div>
          <div
            className="filter-icon"
            onClick={() => setfilterClosed((prev) => !prev)}
          >
            {filterClosed ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </div>
        <div className={`filter-list ${filterClosed ? "" : "hidden"}`}>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Men</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Women</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Unisex</label>
          </div>
        </div>
      </div>

      <div className={`${filterClosed ? "filter-item" : "filter-item-closed"}`}>
        <div className="filter-item-header">
          <div className="filter-title">Category</div>
          <div
            className="filter-icon"
            onClick={() => setfilterClosed((prev) => !prev)}
          >
            {filterClosed ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )}
          </div>
        </div>
        <div className={`filter-list ${filterClosed ? "" : "hidden"}`}>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Caps</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Hoodies</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Bags</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" />
            <label>Helmets</label>
          </div>
          <div className="filter-option">
            <input type="checkbox" />
            <label>T-Shirts</label>
          </div>
        </div>
      </div>
    </div>
  );
}
