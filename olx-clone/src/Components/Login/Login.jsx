import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../olx-logo.svg";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!password) {
      setErrorMessage("Please enter your password.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        setErrorMessage("");
        navigate('/')
      })
      .catch((error) => {
        console.error("Error during login:", error.message);
        if (error.code === "auth/wrong-password") {
          setErrorMessage("Incorrect password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          setErrorMessage("No account found with this email. Please sign up.");
        } else {
          setErrorMessage("No account found with this email. Please sign up.");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-parent-div">
        <div className="logo-container">
          <img
            className="logo-image"
            width="100px"
            height="100px"
            src={Logo}
            alt="Logo"
          />
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            className="input-field"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="input-field"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <a href="/signup" className="signup-link">
          Signup
        </a>
      </div>
    </div>
  );
}

export default Login;
