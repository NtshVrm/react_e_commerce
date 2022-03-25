import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Address() {
  return (
    <div className="address">
      <div className="address-title">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        Delivery Address
      </div>
      <div className="address-location">
        #000 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Repudiandae ea tempora explicabo rerum veniam, ut nam, nisi corrupti
        illo, voluptates molestiae doloremque eaque esse impedit sed repellat
        temporibus dicta assumenda?
      </div>
      <div className="change">
        <button className="change-btn">Change</button>
      </div>
    </div>
  );
}
