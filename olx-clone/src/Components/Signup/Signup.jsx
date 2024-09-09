import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.svg";
import "./Signup.css";
import { FirebaseContext } from "../../FirebaseContext.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config.jsx";
import { setDoc, doc } from "firebase/firestore";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          username,
          email,
          phone,
        });

        console.log("User signed up and data stored:", user);
      })
      .catch((error) => {
        console.error("Error during sign-up:", error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-parent-div">
        <div className="logo-container">
          <img width="100px" height="100px" src={Logo} alt="Logo" />
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <input
            className="input-field"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="fname"
            name="name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            className="input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            className="input-field"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            name="phone"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="input-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            required
          />

          <button type="submit" className="signup-btn">Signup</button>
        </form>
        <a href="/login" className="login-link">Login</a>
      </div>
    </div>
  );
}

export default Signup;
