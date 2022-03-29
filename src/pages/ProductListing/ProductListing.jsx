import {
  FilterSidebar,
  ListingHeader,
  Navbar,
  ProductCard,
  Footer,
} from "../../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useProduct } from "../../context/product-context";
import { useAuth } from "../../context/auth-context.js";

export default function ProductListing() {
  const { finalData, dispatch } = useProduct();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const output = await axios.get("/api/products");
        setProducts(output.data.products);
        dispatch({ type: "DATA", payload: output.data.products });
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
            {finalData &&
              finalData.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    type="productListing"
                  />
                );
              })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
