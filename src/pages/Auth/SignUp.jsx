import { Link } from "react-router-dom";
import "./Auth.css"

export default function Signup(){
    return(
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
        </header><main className="login-container">


                <div className="sign-in-container">
                    <div className="sign-in-title">Register</div>

                    <div className="social-input">
                        <div className="input">
                            <input type="text" className="text-input" />
                                <label className="input-label">Name</label>
                            </div>
                        <div className="input">
                            <input type="text" className="text-input" />
                                <label className="input-label">Email</label>
                            </div>
                        <div className="input">
                            <input type="date" className="text-input" />
                                <label className="input-label">Date of birth</label>
                            </div>
                        <div className="input">
                            <input type="password" className="text-input" />
                                <label className="input-label">Password</label>
                            </div>
                        <div className="input">
                            <input type="password" className="text-input" />
                                <label className="input-label">Confirm Password</label>
                            </div>
                    </div>

                    <button className="sign-button">Sign Up</button>

                    <div className="no-account">Already have an account?<Link to="/Signin" className="sign-up-link">Sign in here!</Link></div>

                </div>
            </main></>
    
    )
}