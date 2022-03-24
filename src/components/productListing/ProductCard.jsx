import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export function ProductCard({ item }) {
  return (
    <div className={`card-container ${item.badge ? "card-with-badge" : ""}`}>
      <div className="wishlist">
        <FontAwesomeIcon icon={faHeart} />
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
