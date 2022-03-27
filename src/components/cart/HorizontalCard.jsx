import { faHeart, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowAltCircleRight,
  faCheckCircle,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export function HorizontalCard({ item }) {
  const [wishlistStatus, setwishlistStatus] = useState(false);

  return (
    <div className="horizontal-card">
      <div className="horizontal-delete">
        <FontAwesomeIcon icon={faTimesCircle} />
      </div>
      <div className="horizontal-image">
        <img className="img" src={item.image} />
      </div>
      <div className="horizontal-description">
        <div className="card-title">{item.title}</div>
        <div className="card-info">{item.info}</div>
        <div className="card-price">
          ${item.discountPrice}
          <del className="card-price-discount">${item.price}</del>
        </div>
        <div className="horizontal-action">
          <div className="quantity">
            <div className="increase">
              <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="amount">1</div>
            <div className="decrease">
              <FontAwesomeIcon icon={faMinus} />
            </div>
          </div>
          <button
            className={`move-button ${wishlistStatus ? "" : "filled"}`}
            onClick={() => setwishlistStatus((prev) => !prev)}
          >
            {wishlistStatus ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            )}
            {wishlistStatus ? "Added to Wishlist" : "Move to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
