import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../components";
import { useState, useRef } from "react";
import "./Auth.css";
import { useAuth } from "../../context/auth-context";

export default function Signup() {
  const first_name = useRef("");
  const last_name = useRef("");
  const user_email = useRef("");
  const user_password = useRef("");
  const confirm_password = useRef("");
  const navigate = useNavigate();

  const { token, signUpUser } = useAuth();

  const signUpFunction = () => {
    const firstname = first_name.current.value;
    const lastname = last_name.current.value;
    const email = user_email.current.value;
    const password = user_password.current.value;
    const confirm = confirm_password.current.value;
    if (email && password && firstname && lastname && confirm !== "") {
      if (password === confirm) {
        (async () => {
          signUpUser(email, password, firstname, lastname);
        })();
      } else {
        alert("Passwords dont match!");
      }
    } else {
      alert("Please fill in all the fields");
      localStorage.removeItem("signup");
      navigate("/Signup");
    }

    if (localStorage.getItem("signup")) {
      setTimeout(() => {
        navigate("/Signin");
      }, 500);
    }
  };

  return (
    <>
      <Navbar />
      <main className="login-container">
        <div className="sign-in-container">
          <div className="sign-in-title">Register</div>

          <div className="social-input">
            <div className="input">
              <input type="text" ref={first_name} className="text-input" />
              <label className="input-label">First Name</label>
            </div>
            <div className="input">
              <input type="text" ref={last_name} className="text-input" />
              <label className="input-label">Last Name</label>
            </div>
            <div className="input">
              <input type="text" ref={user_email} className="text-input" />
              <label className="input-label">Email</label>
            </div>
            <div className="input">
              <input
                type="password"
                ref={user_password}
                className="text-input"
              />
              <label className="input-label">Password</label>
            </div>
            <div className="input">
              <input
                type="password"
                className="text-input"
                ref={confirm_password}
              />
              <label className="input-label">Confirm Password</label>
            </div>
          </div>

          <button className="sign-button" onClick={signUpFunction}>
            Sign Up
          </button>

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
