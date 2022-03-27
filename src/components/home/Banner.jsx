import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { max_lewis } from "../../assets";
export function Banner() {
  return (
    <div className="banner-container">
      <img className="banner-image" src={max_lewis} alt="banner-image" />
      <Link className="banner-text" to="/ProductListing">
        Shop Now
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}
