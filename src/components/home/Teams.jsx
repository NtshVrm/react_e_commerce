import { Link } from "react-router-dom";
import { redbull, mercedes, ferrari, mclaren, alpine, alphatauri, aston, alfa, williams, haas } from "../../assets";

export function Teams(){
    return(
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
    )
}