import axios from "axios";

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

async function removeFromWishlist(id, dispatch, token) {
  try {
    const {
      data: { wishlist },
    } = await axios.delete(`/api/user/wishlist/${id}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlist });
    setWishlistFetch(wishlist);
  } catch (error) {
    console.log(error);
  }
}

export { addToWishlistUtil, removeFromWishlist };
