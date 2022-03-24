import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export function Category(){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCat(){
            try{
                const response = await axios.get("/api/categories");
                setCategories(response.data.categories)
            }
            catch(error){
                console.log("Could not fetch the categories", error);
            }
            
        }
        getCat();
    },[])

    const outputCat = categories.slice(0,3);
    const itemLarge = outputCat.filter((item) => item.display==="large");
    const itemSmall = outputCat.filter((item) => item.display==="small");

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
                    {
                        itemLarge && itemLarge.map((item) => {
                            return(
                                <div key={item.id} className="item">
                                    <img
                                        className="item-img-large"
                                        src={item.image}
                                        alt="cat-large-img" />
                                    <Link className="item-title" to="/ProductListing">{item.categoryName}</Link>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="item-small">
                    {
                        itemSmall && itemSmall.map((item) => {
                            return(
                                <div key={item.id} className="item">
                                    <img
                                        className="item-img-small"
                                        src={item.image}
                                        alt="cat-large-small" />
                                    <Link className="item-title" to="/ProductListing">{item.categoryName}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}