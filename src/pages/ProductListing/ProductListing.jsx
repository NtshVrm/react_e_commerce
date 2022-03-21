import "./ProductListing.css";

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

export default function ProductListing(){
    return(
        <><header className="navbar">
            <div className="nav-brand">
                <img className="nav-logo hidden" src="https://picsum.photos/1000/400"></img>
                <a className="home-link" href="/index.html"><div className="nav-name">SlipStream</div></a>
            </div>
            <div className="nav-icons">
                <div className="searchbar">
                    <input className="search-input" type="search" />
                        <div className="search-logo"><i className="fas fa-search"></i></div>
                    </div>
                <a className="icon" href="/pages/wishlist/wishlist.html"><i className="far fa-heart"></i></a>
                <a className="icon" href="/pages/cart/cart.html"><i className="fas fa-shopping-bag"></i></a>
                <a className="icon" href="/pages/auth/signin.html"><i className="far fa-user"></i></a>
            </div>
        </header><main className="product-container">
                <div className="listing-header">
                    <div className="listing-heading">Products</div>
                    <label for="sort" className="sort-text">Sort
                        <select name="sort" id="sort" className="sort">
                            <option value="popular" selected>Most Popular</option>
                            <option value="rating">Best Rating</option>
                            <option value="newest">Newest</option>
                        </select>
                    </label>
                </div>
                <div className="listing-container">
                    <div className="filter-container">

                        <div className="filter-heading">
                            <div>Filters</div>
                            <div className="clear">Clear</div>
                        </div>

                        <div className="filter-item item-rating">
                            <div className="filter-item-header">
                                <div className="filter-title">Ratings</div>
                            </div>

                            <div className="price-slider">
                                <input type="range" min="$10" max="$100" value="$50" className="slider" />
                                </div>
                        </div>

                        <div className="filter-item item-price">
                            <div className="filter-item-header">
                                <div className="filter-title">Price</div>
                                <div className="filter-icon"><i className="fas fa-minus"></i></div>
                            </div>
                            <div className="filter-list">
                                <div className="filter-option"><input type="radio" /><label>Low to High</label></div>
                                <div className="filter-option"><input type="radio" /><label>High to Low</label></div>
                            </div>
                        </div>

                        <div className="filter-item-closed">
                            <div className="filter-item-header">
                                <div className="filter-title">Gender</div>
                                <div className="filter-icon"><i className="fas fa-plus"></i></div>
                            </div>
                            <div className="filter-list hidden">
                                <div className="filter-option"><input type="checkbox" /><label>Men</label></div>
                                <div className="filter-option"><input type="checkbox" /><label>Women</label></div>
                                <div className="filter-option"><input type="checkbox" /><label>Unisex</label></div>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="filter-item-header">
                                <div className="filter-title">Category</div>
                                <div className="filter-icon"><i className="fas fa-minus"></i></div>
                            </div>
                            <div className="filter-list">
                                <div className="filter-option"><input type="checkbox" /><label>Caps</label></div>
                                <div className="filter-option"><input type="checkbox" /><label>Hoodies</label></div>
                                <div className="filter-option"><input type="checkbox" /><label>Bags</label></div>
                                <div className="filter-option"><input type="checkbox" /><label>Helmets</label></div>
                                <div className="filter-option"><input type="checkbox" /><label>T-Shirts</label></div>
                            </div>
                        </div>
                    </div>

                    <div className="card-listing-container">

                        <div className="card-container card-with-badge">

                            <div className="wishlist"><i className="far fa-heart"></i></div>

                            <div className="card-image"><img className="img" src={max_verstappen_helmet} alt="img" /></div>
                            <div className="card-description">
                                <div className="card-title">Max Verstappen Hemlet</div>
                                <div className="card-price">$59.99
                                    <del className="card-price-discount">$99.99</del>
                                </div>
                            </div>

                            <div className="add-to-cart">
                                <button className="card-button"><i className="fas fa-shopping-bag"></i>Add to Bag</button>
                            </div>
                        </div>


                        <div className="card-container">
                            <div className="wishlist"><i className="far fa-heart"></i></div>
                            <div className="card-image"><img className="img" src={mclaren_hoodie} alt="img" /></div>

                            <div className="card-description">
                                <div className="card-title">McLaren Hoodie</div>
                                <div className="card-price">$79.99
                                    <del className="card-price-discount">$149.99</del>
                                </div>
                            </div>

                            <div className="add-to-cart">
                                <button className="card-button"><i className="fas fa-shopping-bag"></i>Add to Bag</button>
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="wishlist"><i className="far fa-heart"></i></div>
                            <div className="card-image"><img className="img" src={cap_ferrari} alt="img" /></div>
                            <div className="card-description">
                                <div className="card-title">Ferrari Cap</div>
                                <div className="card-price">$29.99
                                    <del className="card-price-discount">$49.99</del>
                                </div>
                            </div>

                            <div className="add-to-cart">
                                <button className="card-button"><i className="fas fa-shopping-bag"></i>Add to Bag</button>
                            </div>
                        </div>

                    </div>



                </div>
            </main>
    </>
    )
}