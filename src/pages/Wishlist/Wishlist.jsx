import "./Wishlist.css";

import { Link } from "react-router-dom";
import {
  alfa,
  alphatauri,
  alpine,
  aston,
  banner_1,
  cap_ferrari,
  cap,
  cart,
  f1_hoodie,
  ferrari,
  haas,
  home,
  max_lewis,
  max_verstappen_helmet,
  mclaren,
  mclaren_hoodie,
  mercedes,
  perez,
  redbull_banner,
  redbull_logo,
  redbull,
  shirt,
  sign_in,
  sign_up,
  williams,
  wishlist_page,
} from "../../assets";
import { ListingHeader, Navbar, ProductCard } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    async function getWishlistItems() {
      try {
        const output = await axios.get("/api/products");
        setWishlistItems(output.data.products);
      } catch (error) {
        console.log("Could not fetch products", error);
      }
    }
    getWishlistItems();
  }, []);

  return (
    <>
      <Navbar />
      <main className="wishlist-container">
        <ListingHeader heading="Wishlist" />

        <div className="wishlist-items">
          <div className="card-listing-container">
            {wishlistItems.map((item) => {
              return <ProductCard key={item.id} item={item} type="wishlist" />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
