import "./Home.css";

import { review } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export function Review(){
    return(
        <div className="review-container">
            <div className="review-heading">What are people saying?</div>
            <div className="review">
                {
                    review && review.map(item => {
                        return(
                            <div key={item.id} className="review-item">
                                <div className="review-image"><FontAwesomeIcon icon={faQuoteLeft} /></div>
                                <div className="review-desc">
                                    {item.description}
                                </div>
                                <div className="review-name">-{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}