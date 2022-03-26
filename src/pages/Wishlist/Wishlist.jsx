import "../../components/wishlist/Wishlist.css";
import { Footer, ListingHeader, Navbar, ProductCard } from "../../components";
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
        <Footer />
      </main>
    </>
  );
}
