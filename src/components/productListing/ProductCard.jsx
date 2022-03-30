import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as heartOutline,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/product-context";
import axios from "axios";
import {
  addToWishlistUtil,
  removeFromWishlist,
} from "../../utils/wishlist-util";
import { addToCartUtil } from "../../utils/cart-util";

export function ProductCard({ item, type }) {
  // set wishlist use state
  const [cartStatus, setcartStatus] = useState(false);
  const navigate = useNavigate();
  const { cart, dispatch, wishlist, setWishlistFetch } = useProduct();

  const { token, tokenState, setTokenState, user } = useAuth();

  useEffect(() => {
    localStorage.getItem("login") ? setTokenState(true) : setTokenState(false);
  });

  const { _id } = item;

  const inCart = cart?.find((obj) => obj._id === _id);

  const inWishlist = wishlist?.find((obj) => obj._id === _id);

  function cartHandler() {
    localStorage.getItem("login")
      ? inCart
        ? navigate("/Cart")
        : addToCartUtil(dispatch, item, token)
      : setTimeout(() => {
          alert("Please Login First");
          navigate("/Signin");
        }, 100);
  }

  function wishlistHandler() {
    localStorage.getItem("login")
      ? inWishlist
        ? navigate("/Wishlist")
        : addToWishlistUtil(dispatch, item, token)
      : setTimeout(() => {
          alert("Please Login First");
          navigate("/Signin");
        }, 100);
  }

  return (
    <div
      className={`card-container ${
        item.badge && type === "productListing" ? "card-with-badge" : ""
      }`}
    >
      <div className="wishlist" onClick={() => wishlistHandler()}>
        {tokenState && inWishlist ? (
          <FontAwesomeIcon icon={faHeart} />
        ) : (
          <FontAwesomeIcon icon={heartOutline} />
        )}
      </div>
      {type === "wishlist" ? (
        <div
          className="delete"
          onClick={() => removeFromWishlist(item._id, dispatch, token)}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </div>
      ) : (
        ""
      )}

      <div className="card-image">
        <img className="img" src={item.image} alt="img" />
      </div>
      <div className="card-description">
        <div className="card-title">{item.title}</div>
        <div className="card-title">Rating: {item.rating}</div>
        <div className="card-price">
          ${item.discountPrice}
          <del className="card-price-discount">${item.price}</del>
        </div>
      </div>
      <div className="add-to-cart">
        <button
          className={`card-button ${tokenState && inCart ? "remove" : ""}`}
          onClick={() =>
            // setcartStatus((prev) => !prev)
            cartHandler()
          }
        >
          <FontAwesomeIcon icon={faBagShopping} />
          {tokenState && inCart ? "Go to Bag" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}
