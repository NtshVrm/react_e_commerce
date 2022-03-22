import { Link } from "react-router-dom";
// import "./Cart.css";

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

export default function Cart() {
    return(
        <> <header className="navbar">
        <div className="nav-brand">
            <img className="nav-logo hidden" src="https://picsum.photos/1000/400"></img>
            <Link className="home-link" to="/Home"><div className="nav-name">SlipStream</div></Link>
        </div>
        <div className="nav-icons">
          <div className="searchbar">
            <input className="search-input" type="search"/>
            <div className="search-logo"><i className="fas fa-search"></i></div>
          </div>
            <Link className="icon" to="/Wishlist"><i className="far fa-heart"></i></Link>
            <Link className="icon" to="/Cart" ><i className="fas fa-shopping-bag"></i></Link>
            <Link className="icon" to="/Signin" ><i className="far fa-user"></i></Link>
            <Link className="icon" to="#" ><i className="fas fa-sign-out-alt"></i></Link>
        </div>
    </header>
    
    <main className="cart-container">
        <div className="listing-header">
            <div className="listing-heading">Cart</div>
            <label for="sort" className="sort-text hidden">Sort
            <select name="sort" id="sort" className="sort">
                <option value="popular" selected>Most Popular</option>
                <option value="rating">Best Rating</option>
                <option value="newest">Newest</option>
                <option value="popular">Price: Low to High</option>
                <option value="popular">Price: High to Low</option>
            </select>
            </label>
        </div>

        <div className="cart-items">
            <div className="cart-cards">

                <div className="horizontal-card">
                    <div className="horizontal-delete"><i className="far fa-times-circle"></i></div>
                    <div className="horizontal-image"><img className="img" src={max_verstappen_helmet} /></div>
                    <div className="horizontal-description">
                        <div className="card-title">Max Verstappen Hemlet</div>
                        <div className="card-info">Max Verstappen 2021 1:1 Scale Helmet</div>
                        <div className="card-price">$59.99 
                            <del className="card-price-discount">$99.99</del>
                        </div>
                        <div className="horizontal-action">
                            <div className="quantity">
                                <div className="increase"><i className="fas fa-plus"></i></div>
                                <div className="amount">1</div>
                                <div className="decrease"><i className="fas fa-minus"></i></div>
                            </div>
                            <button className="move-button">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
                
                <div className="horizontal-card">
                    <div className="horizontal-delete"><i className="far fa-times-circle"></i></div>
                    <div className="horizontal-image"><img className="img" src={mclaren_hoodie} /></div>
                    <div className="horizontal-description">
                        <div className="card-title">MCLAREN HOODIE</div>
                        <div className="card-info">McLaren Racing 2021 Season Hoodie</div>
                        <div className="card-price">$79.99 
                            <del className="card-price-discount">$149.99</del>
                        </div>
                        <div className="horizontal-action">
                            <div className="quantity">
                                <div className="increase"><i className="fas fa-plus"></i></div>
                                <div className="amount">1</div>
                                <div className="decrease"><i className="fas fa-minus"></i></div>
                            </div>
                            <button className="move-button">Move to Wishlist</button>
                        </div>
                    </div>
                </div>

                <div className="horizontal-card">
                    <div className="horizontal-delete"><i className="far fa-times-circle"></i></div>
                    <div className="horizontal-image"><img className="img" src={cap_ferrari} /></div>
                    <div className="horizontal-description">
                        <div className="card-title">Ferrari Cap</div>
                        <div className="card-info">Scuderia Ferrari F1 Team Cap</div>
                        <div className="card-price">$29.99 
                            <del className="card-price-discount">$49.99</del>
                        </div>
                        <div className="horizontal-action">
                            <div className="quantity">
                                <div className="increase"><i className="fas fa-plus"></i></div>
                                <div className="amount">2</div>
                                <div className="decrease"><i className="fas fa-minus"></i></div>
                            </div>
                            <button className="move-button">Move to Wishlist</button>
                        </div>
                    </div>
                </div>
               
            </div>

            <div className="cart-summary">
                <div className="shipping">
                    <div className="address">
                        <div className="address-title"><i className="fas fa-map-marker-alt"></i>Delivery Address</div>
                        <div className="address-location">#000 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Repudiandae ea tempora explicabo rerum veniam, ut nam, nisi corrupti illo, 
                            voluptates molestiae doloremque eaque esse impedit sed repellat
                             temporibus dicta assumenda?
                        </div>
                        <div className="change">
                            <button className="change-btn">Change</button>
                        </div>
                    </div>
                    <div className="secondary-info">
                        <div className="update">
                            <div className="update-title">Shipping Updates</div>
                            <div className="update-desc">
                                <div className="update-email"><i className="email fas fa-at"></i>random@example.com</div>
                                <div className="update-phone"><i className="phone fas fa-phone-alt"></i>123456789</div>
                            </div>
                            <div className="change">
                                <button className="change-btn">Update</button>
                            </div>
                        </div>
                        <div className="pay-detail">
                            <div className="pay-title">Payment Mode</div>
                            <div className="pay-desc">
                                <div className="pay-logo"><i className="fab fa-cc-visa"></i></div>
                                <div className="pay-info">
                                    <span>Ending with 1234</span>
                                    <span className="expiry">Expires on 12/2012</span> 
                                </div>
                            </div>
                            <div className="change">
                                <button className="change-btn">Change</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pricing">
                    <div className="pricing-title"><i className="fas fa-receipt"></i>Order Summary</div>
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
                        <button className="checkout"><i className="fas fa-arrow-circle-right"></i>CHECKOUT</button>
                        <Link className="continue" to="/pages/product-listing/product.html">Or Continue Shopping</Link>
                    </div>
                   
                </div>
            </div>
        </div>
    </main></>
    )
}