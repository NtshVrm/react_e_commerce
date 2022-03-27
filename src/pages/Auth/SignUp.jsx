import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import "./Auth.css";

export default function Signup() {
  return (
    <>
      <Navbar />
      <main className="login-container">
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

          <div className="no-account">
            Already have an account?
            <Link to="/Signin" className="sign-up-link">
              Sign in here!
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
