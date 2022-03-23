import { Link } from "react-router-dom";
import { f1_hoodie, cap, shirt } from "../../assets";

export function Category(){
    return(
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
    );
}