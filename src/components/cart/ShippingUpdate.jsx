import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ShippingUpdate() {
  return (
    <div className="update">
      <div className="update-title">Shipping Updates</div>
      <div className="update-desc">
        <div className="update-email">
          <FontAwesomeIcon className="email" icon={faAt} />
          random@example.com
        </div>
        <div className="update-phone">
          <FontAwesomeIcon className="phone" icon={faPhone} />
          123456789
        </div>
      </div>
      <div className="change">
        <button className="change-btn">Update</button>
      </div>
    </div>
  );
}
