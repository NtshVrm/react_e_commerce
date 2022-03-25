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
        <ListingHeader heading="Products" />
        <div className="listing-container">
          <FilterSidebar />
          <div className="card-listing-container">
            {products.map((item) => {
              return <ProductCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
