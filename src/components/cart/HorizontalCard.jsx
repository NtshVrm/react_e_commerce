import { faHeart, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowAltCircleRight,
  faCheckCircle,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";

export function HorizontalCard({ item }) {
  const { cart, dispatch, setCartFetch, wishlist, setWishlistFetch } =
    useProduct();
  const { token } = useAuth();
  const { _id } = item;

  const inWishlist = wishlist?.find((obj) => obj._id === _id);

  async function removeFromCart(id, dispatch, token) {
    try {
      const {
        data: { cart },
      } = await axios.delete(`/api/user/cart/${id}`, {
        headers: {
          authorization: token,
        },
      });
      dispatch({ type: "REMOVE_FROM_CART", payload: cart });
      setCartFetch(cart);
    } catch (error) {
      console.log(error);
    }
  }

  async function quantityHandler(id, dispatch, token, type) {
    try {
      const {
        data: { cart },
      } = await axios.post(
        `/api/user/cart/${id}`,
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      dispatch({ type: "QUANTITY", payload: cart });
      console.log(cart);
    } catch (error) {
      console.log(error);
    }
  }

  async function addToWishlistUtil(dispatch, product, login) {
    try {
      const {
        data: { wishlist },
      } = await axios.post(
        "/api/user/wishlist",
        {
          product,
        },
        {
          headers: {
            authorization: login,
          },
        }
      );

      dispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
    } catch (error) {
      console.log(error);
    }
  }

  function moveHandler() {
    removeFromCart(item._id, dispatch, token);
    addToWishlistUtil(dispatch, item, token);
  }

  return (
    <div className="horizontal-card">
      <div
        className="horizontal-delete"
        onClick={() => removeFromCart(item._id, dispatch, token)}
      >
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
            <button
              className="qty-button"
              onClick={() => quantityHandler(_id, dispatch, token, "increment")}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <div className="amount">{item.qty}</div>
            <button
              className="qty-button"
              onClick={() => quantityHandler(_id, dispatch, token, "decrement")}
              disabled={item.qty <= 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
          </div>
          <button
            className={`move-button ${inWishlist ? "" : "filled"}`}
            onClick={() => moveHandler()}
            disabled={inWishlist ? true : false}
          >
            {inWishlist ? (
              <FontAwesomeIcon icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            )}
            {inWishlist ? "Added to Wishlist" : "Move to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}
