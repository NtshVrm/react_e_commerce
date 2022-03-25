import {
  faCircleArrowRight,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function OrderSummary() {
  return (
    <div className="pricing">
      <div className="pricing-title">
        <FontAwesomeIcon icon={faReceipt} />
        Order Summary
      </div>
      <div className="pricing-breakdown">
        <div className="pricing-item">
          <div className="pricing-name">Quantity</div>
          <div className="pricing-value">4</div>
        </div>
        <div className="pricing-item">
          <div className="pricing-name">Subtotal</div>
          <div className="pricing-value">$199.96</div>
        </div>
        <div className="pricing-item">
          <div className="pricing-name">Discount</div>
          <div className="pricing-value">-$150</div>
        </div>
        <div className="pricing-item">
          <div className="pricing-name">Shipping</div>
          <div className="pricing-value">FREE</div>
        </div>
        <div className="pricing-item">
          <div className="pricing-name">Tax</div>
          <div className="pricing-value">$1.99</div>
        </div>
      </div>
      <div className="pricing-total">
        <span>Total</span>
        <span>$201.95</span>
      </div>

      <div className="pricing-checkout">
        <button className="checkout">
          <FontAwesomeIcon icon={faCircleArrowRight} />
          CHECKOUT
        </button>
        <Link className="continue" to="/ProductListing">
          Or Continue Shopping
        </Link>
      </div>
    </div>
  );
}
