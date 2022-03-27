import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { filterComp } from "../data";
import { useProduct } from "../../context/product-context";

export function FilterSidebar() {
  const { dispatch } = useProduct();
  const [filterOptions, setfilterOptions] = useState(filterComp);

  return (
    <>
      <div className="filter-container">
        <div className="filter-heading">
          <div>Filters</div>
          <div className="clear" onClick={() => dispatch({ type: "CLEAR" })}>
            Clear
          </div>
        </div>

        <div className="filter-item item-rating">
          <div className="filter-item-header">
            <div className="filter-title">Price</div>
          </div>

          <div className="price-slider">
            <input type="range" min="$10" max="$100" className="slider" />
          </div>
        </div>

        {filterOptions.map((item) => {
          return (
            <div
              className={`${
                item.filterClosed ? "filter-item" : "filter-item-closed"
              }`}
            >
              <div className="filter-item-header">
                <div className="filter-title">{item.title}</div>
                <div
                  className="filter-icon"
                  onClick={() => {
                    const newList = filterOptions.map((obj) => {
                      if (obj.id === item.id) {
                        return { ...obj, filterClosed: !item.filterClosed };
                      }
                      return obj;
                    });
                    setfilterOptions(newList);
                  }}
                >
                  {item.filterClosed ? (
                    <FontAwesomeIcon icon={faMinus} />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </div>
              </div>
              <div
                className={`filter-list ${item.filterClosed ? "" : "hidden"}`}
              >
                {item.options.map((obj) => {
                  return (
                    <div className="filter-option">
                      <input
                        type={item.type}
                        name={item.title}
                        onChange={(event) => {
                          dispatch({
                            type: "FILTER",
                            payload: item.title,
                            filterType: obj.val,
                          });
                        }}
                      />
                      <label>{obj.val}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
