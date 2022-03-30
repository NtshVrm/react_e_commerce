import "../../components/wishlist/Wishlist.css";
import { Footer, ListingHeader, Navbar, ProductCard } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context";

export default function Wishlist() {
  const { wishlistFetch, setWishlistFetch, wishlist } = useProduct();
  const { token, tokenState, setTokenState, user } = useAuth();

  setWishlistFetch(wishlist);
  console.log(wishlistFetch);

  useEffect(() => {
    localStorage.getItem("login") ? setTokenState(true) : setTokenState(false);
  });

  const wishlistSize = wishlistFetch.length > 0;

  return (
    <>
      <Navbar />
      <main className="wishlist-container">
        <ListingHeader heading="Wishlist" />

        <div className="wishlist-items">
          <div className="card-listing-container">
            {tokenState && wishlistSize ? (
              <>
                {wishlistFetch.map((item) => {
                  return (
                    <ProductCard key={item.id} item={item} type="wishlist" />
                  );
                })}
              </>
            ) : (
              <h1>Wishlist is Empty</h1>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
