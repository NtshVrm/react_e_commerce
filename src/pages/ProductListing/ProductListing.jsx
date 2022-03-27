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

  // products.map((item) => {
  //   products.sort((a, b) => b.price - a.price);
  // });

  // const output = products
  //   .map((item) => item)
  //   .filter((item) => item.badge === true);
  // console.log(output);

  // const output = products
  //   .map((item) => item)
  //   .filter((item) => item.rating >= 3.5);
  // console.log(output);

  // products.map((item) => {
  //   products.sort((a, b) => b.badge - a.badge);
  // });

  // const output = products
  //   .map((item) => item)
  //   .filter((item) => item.gender === "male");

  // const output = products
  //   .map((item) => item)
  //   .filter((item) => item.category === "helmet");

  return (
    <>
      <Navbar />
      <main className="product-container">
        <ListingHeader heading="Products" />
        <div className="listing-container">
          <FilterSidebar />
          <div className="card-listing-container">
            {finalData.map((item) => {
              return (
                <ProductCard key={item.id} item={item} type="productListing" />
              );
            })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
