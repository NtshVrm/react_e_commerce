import { Link } from "react-router-dom"
import "./Auth.css"

export default function Signin(){
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
                    <div className="sign-in-title">Sign In</div>
                    <div className="social-container">
                        <div className="social-heading"><div className="social-title">Sign in with</div></div>
                        <div className="social-button">
                            <button className="login-item"><i className="fab fa-google"></i></button>
                            <button className="login-item"><i className="fab fa-facebook"></i></button>
                            <button className="login-item"><i className="fab fa-twitter"></i></button>
                        </div>
                    </div>

                    <div className="social-input">
                        <div className="input-heading"><div className="input-title">Or continue with</div></div>
                        <div className="input">
                            <input type="text" className="text-input" />
                                <label className="input-label">Email</label>
                            </div>
                        <div className="input">
                            <input type="password" className="text-input" />
                                <label className="input-label">Password</label>
                            </div>
                    </div>

                    <div className="sign-in-footer">
                        <div className="remember">
                            <input type="checkbox" className="remember-me" />
                                <label>Remember me</label>
                            </div>
                        <Link to="#" className="forgot">Forgot your password?</Link>
                    </div>

                    <button className="sign-button">Sign In</button>

                    <div className="no-account">Don't have an account?<Link to="/Signup" className="sign-up-link">Sign up Now!</Link></div>

                </div>
            </main></>

    )
}