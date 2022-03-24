import "./ProductListing.css";
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
import {
  FilterSidebar,
  ListingHeader,
  Navbar,
  ProductCard,
} from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const output = await axios.get("/api/products");
        setProducts(output.data.products);
      } catch (error) {
        console.log("Could not fetch products", error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="product-container">
        <ListingHeader />
        <div className="listing-container">
          <FilterSidebar />
          <div className="card-listing-container">
            {products.map((obj) => {
              return <ProductCard item={obj} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
