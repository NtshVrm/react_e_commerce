export function FilterSidebar(){
    return(
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
                                <div className="filter-option"><input type="radio" name="sort"/><label>Low to High</label></div>
                                <div className="filter-option"><input type="radio" name="sort" /><label>High to Low</label></div>
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
    )
}