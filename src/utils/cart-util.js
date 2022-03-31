import axios from "axios";

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

export { addToCartUtil, removeFromCart, quantityHandler };
