
import { feature } from "../data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Feature(){
    return(
        <div className="feature-container">
                    <div className="feature-heading">WHY US?</div>

                    <div className="feature">
                        
                        {
                            feature && feature.map((item) => {
                                return(
                                    <div className="feature-item">
                                        <div className="feature-image">
                                        <FontAwesomeIcon icon={item.icon} />
                                        </div>
                                        <div className="feature-title">{item.title}</div>
                                        <div className="feature-desc">
                                            {item.description}
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
    )
}