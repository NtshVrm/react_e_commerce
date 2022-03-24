import {
  faBagShopping,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Home.css";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-brand">
        <img
          className="nav-logo hidden"
          src="https://picsum.photos/1000/400"
        ></img>
        <Link className="home-link" to="/Home">
          <div className="nav-name">SlipStream</div>
        </Link>
      </div>
      <div className="nav-icons">
        <div className="searchbar">
          <input className="search-input" type="search" />
          <div className="search-logo">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        <Link className="icon" to="/Wishlist">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link className="icon" to="/Cart">
          <FontAwesomeIcon icon={faBagShopping} />
        </Link>
        <Link className="icon" to="/Signin">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </header>
  );
}
