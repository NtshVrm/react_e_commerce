import { Link } from "react-router-dom";
import { redbull, mercedes, ferrari, mclaren, alpine, alphatauri, aston, alfa, williams, haas } from "../../assets";
import "./Home.css";

import { teams } from "../data";

export function Teams(){

    const teamSmall = teams.filter((item) => item.display==="small");
    const teamLarge = teams.filter((item) => item.display==="large");
    return(
        <div className="team-container">
                    <div className="team-heading">MEET THE TEAMS</div>

                    <div className="team-list-large">
                        {
                            teamLarge && teamLarge.map(item => {
                                return(
                                    <div className="team-item">
                                        <img className="team-image-large" src={item.image} />
                                        <Link className="team-title team-title-large" to="/">{item.teamName}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="team-list-small">
                        {
                            teamSmall && teamSmall.map(item => {
                                return(
                                    <div className="team-item">
                                        <img className="team-image-small" src={item.image} />
                                        <Link className="team-title team-title-small" to="/">{item.teamName}</Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
    )
}