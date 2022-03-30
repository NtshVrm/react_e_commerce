import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/product-context";
// import { addToCartUtil } from "../../utils/cart-utils.js";
import axios from "axios";

export function ProductCard({ item, type }) {
  const [wishlist, setWishlist] = useState(false);
  const [cartStatus, setcartStatus] = useState(false);
  const navigate = useNavigate();
  const { cart, dispatch } = useProduct();

  const { token, tokenState, setTokenState, user } = useAuth();

  useEffect(() => {
    localStorage.getItem("login") ? setTokenState(true) : setTokenState(false);
  });

  const { _id } = item;

  const inCart = cart?.find((obj) => obj._id === _id);

  async function addToCartUtil(dispatch, product, login) {
    try {
      const {
        data: { cart },
      } = await axios.post(
        "/api/user/cart",
        {
          product,
        },
        {
          headers: {
            authorization: login,
          },
        }
      );

      dispatch({ type: "ADD_TO_CART", payload: cart });
    } catch (error) {
      console.log(error);
    }
  }

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
        <div className="card-title">Rating: {item.rating}</div>
        <div className="card-price">
          ${item.discountPrice}
          <del className="card-price-discount">${item.price}</del>
        </div>
      </div>
      <div className="add-to-cart">
        <button
          className={`card-button ${tokenState && inCart ? "remove" : ""}`}
          onClick={() => cartHandler()}
        >
          <FontAwesomeIcon icon={faBagShopping} />
          {tokenState && inCart ? "Go to Bag" : "Add to Bag"}
        </button>
      </div>
    </div>
  );
}
