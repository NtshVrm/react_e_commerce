import "./Home.css";

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
  
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <><header className="navbar">
            <div className="nav-brand">
                <img className="nav-logo hidden" src="https://picsum.photos/1000/400"></img>
                <Link className="home-link" to="/Home"><div className="nav-name">SlipStream</div></Link>
            </div>

            <div className="nav-icons">
                <div className="searchbar">
                    <input className="search-input" type="search" />
                        <div className="search-logo"><i className="fas fa-search"></i></div>
                    </div>
                <Link className="icon" to="/Wishlist"><i className="far fa-heart"></i></Link>
                <Link className="icon" to="/Cart"><i className="fas fa-shopping-bag"></i></Link>
                <Link className="icon" to="/Signin"><i className="far fa-user"></i></Link>
            </div>

        </header><main className="home-container">
                {/* < />!-- BANNER CONATINER --> */}
                <div className="banner-container">
                    <img
                        className="banner-image"
                        src={max_lewis}
                        alt="banner-image" />
                    <Link className="banner-text" to="/ProductListing">Shop Now<i className="fas fa-arrow-right"></i></Link>
                </div>

                {/* < />!-- CATEGORY CONTAINER --> */}
                <div className="category-container">
                    <div className="category-header">
                        <div className="category-title">Shop by category</div>
                        <Link className="category-action" to="/ProductListing">
                            Browse all categories<i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>

                    <div className="category-list">
                        <div className="item-large">
                            <div className="item">
                                <img
                                    className="item-img-large"
                                    src={f1_hoodie}
                                    alt="cat-large-img" />
                                <Link className="item-title" to="/ProductListing">Hoodies</Link>
                            </div>
                        </div>

                        <div className="item-small">
                            <div className="item">
                                <img
                                    className="item-img-small"
                                    src={cap}
                                    alt="" />
                                <Link className="item-title" to="/ProductListing">Caps</Link>
                            </div>

                            <div className="item">
                                <img
                                    className="item-img-small"
                                    src={shirt}
                                    alt="" />
                                <Link className="item-title" to="/ProductListing">T-Shirts</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* < />!-- FEATURE CONTAINER --> */}
                <div className="feature-container">
                    <div className="feature-heading">WHY US?</div>

                    <div className="feature">
                        <div className="feature-item">
                            <div className="feature-image"><i className="fas fa-exchange-alt"></i></div>
                            <div className="feature-title">Free Returns</div>
                            <div className="feature-desc">
                                Get free returns on all your orders when returned within 7 days.
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-image">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <div className="feature-title">Fast Shipping</div>
                            <div className="feature-desc">
                                Your orders are shipped within 36 hours of order placement.
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-image"><i className="fas fa-percentage"></i></div>
                            <div className="feature-title">Amazing Discounts</div>
                            <div className="feature-desc">
                                Discounts on all categories all throughout the year with special offers on race weekends.
                            </div>
                        </div>
                        <div className="feature-item">
                            <div className="feature-image"><i className="fas fa-globe-asia"></i></div>
                            <div className="feature-title">Eco Friendly</div>
                            <div className="feature-desc">
                                3% of all profits goes towards eco-friendly causes like teamtrees etc.
                            </div>
                        </div>
                    </div>
                </div>

                {/* < />!-- TEAMS CONTAINER --> */}
                <div className="team-container">
                    <div className="team-heading">MEET THE TEAMS</div>

                    <div className="team-list-large">
                        <div className="team-item">
                            <img className="team-image-large" src={redbull} />
                            <Link className="team-title team-title-large" to="/">Redbull</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-large" src={mercedes} />
                            <Link className="team-title team-title-large" to="/">MERCEDES</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-large" src={ferrari} />
                            <Link className="team-title team-title-large" to="/">ferrari</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-large" src={mclaren} />
                            <Link className="team-title team-title-large" to="/">mclaren</Link>
                        </div>
                    </div>

                    <div className="team-list-small">
                        <div className="team-item">
                            <img className="team-image-small" src={alpine} />
                            <Link className="team-title team-title-small" to="/">Alpine</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-small" src={alphatauri} />
                            <Link className="team-title team-title-small" to="/">AlphaTauri</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-small" src={aston} />
                            <Link className="team-title team-title-small" to="/">Aston Martin</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-small" src={alfa} />
                            <Link className="team-title team-title-small" to="/">Ala Romeo</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-small" src={williams} />
                            <Link className="team-title team-title-small" to="/">Williams</Link>
                        </div>
                        <div className="team-item">
                            <img className="team-image-small" src={haas} />
                            <Link className="team-title team-title-small" to="/">haas</Link>
                        </div>
                    </div>
                </div>

                {/* < />!-- REVIEW CONTAINER --> */}
                <div className="review-container">
                    <div className="review-heading">What are people saying?</div>

                    <div className="review">
                        <div className="review-item">
                            <div className="review-image"><i className="fas fa-quote-left"></i></div>
                            <div className="review-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim iure id praesentium, atque repudiandae minus quasi ut voluptatibus, delectus iusto ratione nostrum quos officia aspernatur doloremque aliquid dicta accusantium?
                            </div>
                            <div className="review-name">-Lewis Hamilton</div>
                        </div>

                        <div className="review-item">
                            <div className="review-image"><i className="fas fa-quote-left"></i></div>
                            <div className="review-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim iure id praesentium, atque repudiandae minus quasi ut voluptatibus, delectus iusto ratione nostrum quos officia aspernatur doloremque aliquid dicta accusantium?
                            </div>
                            <div className="review-name">-Max Verstappen</div>
                        </div>

                        <div className="review-item">
                            <div className="review-image"><i className="fas fa-quote-left"></i></div>
                            <div className="review-desc">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint enim iure id praesentium, atque repudiandae minus quasi ut voluptatibus, delectus iusto ratione nostrum quos officia aspernatur doloremque aliquid dicta accusantium?
                            </div>
                            <div className="review-name">-Alex Albon</div>
                        </div>

                    </div>
                </div>
            </main><footer className="footer">
                <div className="footer-docs">
                    <Link className="doc-item" to="/">About Us</Link>
                    <Link className="doc-item" to="/">Customer Service</Link>
                    <Link className="doc-item" to="/">Delivery</Link>
                    <Link className="doc-item" to="/">Terms & Conditions</Link>
                </div>
                <div className="footer-social">
                    <Link className="social-item" to="/"><i className="fab fa-facebook"></i></Link>
                    <Link className="social-item" to="/"><i className="fab fa-twitter"></i></Link>
                    <Link className="social-item" to="/"><i className="fab fa-instagram"></i></Link>
                    <div className="sep-item">|</div>
                    <div className="pay-item"><i className="fab fa-google-pay"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-visa"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-paypal"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-mastercard"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-apple-pay"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-amex"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-amazon-pay"></i></div>

                </div>
                <div className="footer-copyright">
                    <div className="copyright-item"><i className="far fa-copyright"></i> 2022 NtshVrm.All right reserved.</div>
                </div>
            </footer></>
    );
}