import "./Wishlist.css";

import { Link } from "react-router-dom";
import {
  alfa,
  alphatauri,
  alpine,
  aston,
  banner_1,
  cap_ferrari,
  cap,
  cart,
  f1_hoodie,
  ferrari,
  haas,
  home,
  max_lewis,
  max_verstappen_helmet,
  mclaren,
  mclaren_hoodie,
  mercedes,
  perez,
  redbull_banner,
  redbull_logo,
  redbull,
  shirt,
  sign_in,
  sign_up,
  williams,
  wishlist_page,
} from "../../assets";
import { ListingHeader } from "../../components";

export default function Wishlist() {
  return (
    <>
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
              <i className="fas fa-search"></i>
            </div>
          </div>
          <Link className="icon" to="/Wishlist">
            <i className="far fa-heart"></i>
          </Link>
          <Link className="icon" to="/Cart">
            <i className="fas fa-shopping-bag"></i>
          </Link>
          <Link className="icon" to="/Signin">
            <i className="far fa-user"></i>
          </Link>
        </div>
      </header>
      <main className="wishlist-container">
        <ListingHeader heading="Wishlist" />

        <div className="wishlist-items">
          <div className="card-listing-container">
            <div className="card-container">
              <div className="wishlist">
                <i className="fas fa-heart"></i>
              </div>

              <div className="delete">
                <i className="far fa-times-circle"></i>
              </div>

              <div className="card-image">
                <img className="img" src={max_verstappen_helmet} alt="img" />
              </div>
              <div className="card-description">
                <div className="card-title">Max Verstappen Hemlet</div>
                <div className="card-price">
                  $59.99
                  <del className="card-price-discount">$99.99</del>
                </div>
              </div>

              <div className="add-to-cart">
                <button className="card-button">
                  <i className="fas fa-shopping-bag"></i>Add to Bag
                </button>
              </div>
            </div>

            <div className="card-container">
              <div className="wishlist">
                <i className="fas fa-heart"></i>
              </div>
              <div className="delete">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="card-image">
                <img className="img" src={mclaren_hoodie} alt="img" />
              </div>
              <div className="card-description">
                <div className="card-title">McLaren Hoodie</div>
                <div className="card-price">
                  $79.99
                  <del className="card-price-discount">$149.99</del>
                </div>
              </div>

              <div className="add-to-cart">
                <button className="card-button">
                  <i className="fas fa-shopping-bag"></i>Add to Bag
                </button>
              </div>
            </div>

            <div className="card-container">
              <div className="wishlist">
                <i className="fas fa-heart"></i>
              </div>
              <div className="delete">
                <i className="far fa-times-circle"></i>
              </div>
              <div className="card-image">
                <img className="img" src={cap_ferrari} alt="img" />
              </div>
              <div className="card-description">
                <div className="card-title">Ferrari Cap</div>
                <div className="card-price">
                  $29.99
                  <del className="card-price-discount">$49.99</del>
                </div>
              </div>

              <div className="add-to-cart">
                <div className="quantity">
                  <div className="increase">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="amount">1</div>
                  <div className="decrease">
                    <i className="fas fa-minus"></i>
                  </div>
                </div>
                <button className="card-button remove">
                  <i className="fas fa-shopping-bag"></i>Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
