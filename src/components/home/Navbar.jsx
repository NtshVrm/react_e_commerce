import { Link } from "react-router-dom";
import "./Home.css"

export function Navbar(){
    return(
        <header className="navbar">
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

        </header>
    );
}