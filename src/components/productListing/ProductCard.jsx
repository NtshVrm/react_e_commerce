import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ProductCard({ item, type }) {
  const [wishlist, setWishlist] = useState(false);
  const [cartStatus, setcartStatus] = useState(false);
  return (
    <div
      className={`card-container ${
        item.badge && type === "productListing" ? "card-with-badge" : ""
      }`}
    >
      <div
        className="wishlist"
        onClick={() => {
          setWishlist((prev) => !prev);
        }}
      >
        {wishlist ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={heartOutline} />
        )}
      </div>
      {type === "wishlist" ? (
        <div className="delete">
          <i className="far fa-times-circle"></i>
        </div>
      ) : (
        ""
      )}

      <div className="card-image">
        <img className="img" src={item.image} alt="img" />
      </div>
      <div className="card-description">
        <div className="card-title">{item.title}</div>
        <div className="card-price">
          ${item.discountPrice}
          <del className="card-price-discount">${item.price}</del>
        </div>
      </div>
      <div className="add-to-cart">
        <button
          className={`card-button ${cartStatus ? "remove" : ""}`}
          onClick={() => setcartStatus((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBagShopping} />
          {cartStatus ? "Remove from Bag" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}
