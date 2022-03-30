import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const [tokenState, setTokenState] = useState(false);
  const navigate = useNavigate();

  const signUpUser = async (email, password, firstname, lastname) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        firstName: firstname,
        lastName: lastname,
      });
      if (status === 200 || 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
        alert("Successfully Created! Proceed to login with your credentials");
        setTimeout(() => {
          navigate("/Signin");
        }, 500);
      }
    } catch (error) {
      console.log(error);
      alert("User already exists, please sign in!");
    }
  };

  const signInUser = async (email, password) => {
    try {
      const {
        data: { foundUser, encodedToken },
        status,
      } = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      console.log(status);
      if (status == 200) {
        localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: foundUser }));
        setUser(foundUser);
      }
      if (status == 201) {
        alert("Wrong Password");
      }
    } catch (error) {
      console.log(error);
      alert("No User found with entered email!");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        signUpUser,
        signInUser,
        user,
        setUser,
        tokenState,
        setTokenState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
