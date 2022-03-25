import {
  Address,
  Footer,
  HorizontalCard,
  ListingHeader,
  Navbar,
  OrderSummary,
  PaymentInfo,
  ShippingUpdate,
} from "../../components";
import "../../components/cart/Cart.css";

import axios from "axios";
import { useState, useEffect } from "react";

export default function Cart() {
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
      <main className="cart-container">
        <ListingHeader heading="Cart" />

        <div className="cart-items">
          <div className="cart-cards">
            {products.map((item) => {
              return <HorizontalCard key={item.id} item={item} />;
            })}
          </div>

          <div className="cart-summary">
            <div className="shipping">
              <Address />
              <div className="secondary-info">
                <ShippingUpdate />
                <PaymentInfo />
              </div>
            </div>

            <OrderSummary />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
