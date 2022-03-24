import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function ProductCard({ item }) {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div className={`card-container ${item.badge ? "card-with-badge" : ""}`}>
      <div className="wishlist" onClick={() => setWishlist((prev) => !prev)}>
        {wishlist ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={heartOutline} />
        )}
      </div>
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
        <button className="card-button">
          <FontAwesomeIcon icon={faBagShopping} />
          Add to Bag
        </button>
      </div>
    </div>
  );
}
