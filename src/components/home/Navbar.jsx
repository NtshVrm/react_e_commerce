import {
  faBagShopping,
  faHeart,
  faSearch,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import "./Home.css";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";

export function Navbar() {
  const { token, tokenState, setTokenState, user } = useAuth();

  useEffect(() => {
    localStorage.getItem("login") ? setTokenState(true) : setTokenState(false);
  }, [token]);

  return (
    <header className="navbar">
      <div className="nav-brand">
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
          <label>Wishlist</label>
        </Link>
        <Link className="icon" to="/Cart">
          <FontAwesomeIcon icon={faBagShopping} />
          <label>Cart</label>
        </Link>
        {tokenState ? (
          <Link className="icon" to="#">
            <FontAwesomeIcon icon={faIdCard} />
            <label>{user.firstName}</label>
          </Link>
        ) : (
          <Link className="icon" to="/Signin">
            <FontAwesomeIcon icon={faUser} />
            <label>Login</label>
          </Link>
        )}

        {tokenState ? (
          <Link
            className="icon"
            to="/"
            onClick={() => {
              localStorage.removeItem("login");
              setTokenState(false);
              setTimeout(() => {
                alert("You have logged out!");
                navigate("/Signin");
              }, 500);
            }}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            <label>Logout</label>
          </Link>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
