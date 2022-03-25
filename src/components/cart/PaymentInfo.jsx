import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PaymentInfo() {
  return (
    <div className="pay-detail">
      <div className="pay-title">Payment Mode</div>
      <div className="pay-desc">
        <div className="pay-logo">
          <FontAwesomeIcon icon={faCcVisa} />
        </div>
        <div className="pay-info">
          <span>Ending with 1234</span>
          <span className="expiry">Expires on 12/2012</span>
        </div>
      </div>
      <div className="change">
        <button className="change-btn">Change</button>
      </div>
    </div>
  );
}
