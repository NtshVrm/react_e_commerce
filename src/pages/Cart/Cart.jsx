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

import { useState, useEffect } from "react";
import { useProduct } from "../../context/product-context.js";
import { useAuth } from "../../context/auth-context.js";

export default function Cart() {
  const { cart, cartFetch, setCartFetch, dispatch } = useProduct();
  const { token, tokenState, setTokenState, user } = useAuth();

  setCartFetch(cart);
  console.log(cartFetch);

  useEffect(() => {
    localStorage.getItem("login") ? setTokenState(true) : setTokenState(false);
  });

  const cartSize = cartFetch.length > 0;

  return (
    <>
      <Navbar />
      <main className="cart-container">
        <ListingHeader heading="Cart" />

        <div className="cart-items">
          <div className="cart-cards">
            {tokenState && cartSize ? (
              <>
                {cartFetch.map((item) => {
                  return <HorizontalCard key={item.id} item={item} />;
                })}
              </>
            ) : (
              <h1>Cart is empty</h1>
            )}
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
