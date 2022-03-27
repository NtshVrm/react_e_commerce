import { Link } from "react-router-dom";
import "./Auth.css";
import { Footer, Navbar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Signin() {
  return (
    <>
      <Navbar />
      <main className="login-container">
        <div className="sign-in-container">
          <div className="sign-in-title">Sign In</div>
          <div className="social-container">
            <div className="social-heading">
              <div className="social-title">Sign in with</div>
            </div>
            <div className="social-button">
              <button className="login-item">
                <FontAwesomeIcon icon={faGoogle} />
              </button>
              <button className="login-item">
                <FontAwesomeIcon icon={faTwitter} />
              </button>
              <button className="login-item">
                <FontAwesomeIcon icon={faFacebook} />
              </button>
            </div>
          </div>

          <div className="social-input">
            <div className="input-heading">
              <div className="input-title">Or continue with</div>
            </div>
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
            <Link to="#" className="forgot">
              Forgot your password?
            </Link>
          </div>

          <button className="sign-button">Sign In</button>

          <div className="no-account">
            Don't have an account?
            <Link to="/Signup" className="sign-up-link">
              Sign up Now!
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
