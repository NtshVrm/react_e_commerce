import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { Footer, Navbar } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useEffect } from "react";

export default function Signin() {
  const login_email = useRef("");
  const login_password = useRef("");
  const navigate = useNavigate();

  const { token, signInUser } = useAuth();

  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    (async () => {
      if (loginDetails.email && loginDetails.password !== "") {
        signInUser(loginDetails.email, loginDetails.password);
      }
    })();
  }, [loginDetails.email, loginDetails.password]);

  const testFunction = () => {
    setloginDetails((prev) => ({
      ...prev,
      email: "mock@gmail.com",
      password: "mockPassword",
    }));
  };

  const signInFunction = () => {
    setloginDetails((prev) => ({
      ...prev,
      email: login_email.current.value,
      password: login_password.current.value,
    }));
  };

  if (
    localStorage.getItem("login") !== "{}" &&
    localStorage.getItem("login") !== null
  ) {
    setTimeout(() => {
      navigate("/ProductListing");
    }, 500);
  }

  console.log(localStorage.getItem("login"));

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
              <input
                type="text"
                className="text-input"
                placeholder="mock@gmail.com"
                ref={login_email}
              />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="text-input"
                placeholder="mockPassword"
                ref={login_password}
              />
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

          <button className="test-button" onClick={testFunction}>
            Use Test Credentials
          </button>
          <button className="sign-button" onClick={signInFunction}>
            Sign In
          </button>

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
