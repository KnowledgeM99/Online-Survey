import React, { useState } from "react";
import axios from "axios";
import Registration from "./Registration";
import "../CSSFiles/Login.css";

function Login(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginSubmitted, setLoginSubmitted] = useState(false);
  const [signupSubmitted, setSignupSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:4000/app/login", credentials)
      .then((response) => {
        console.log(response.data);
        setEmail("");
        setPassword("");
        setLoginSubmitted(true);
        setLoginError("");
        props.onLogin(response.data.token);
      })
      .catch((error) => {
        console.log(error);
        setLoginError("Invalid email or password");
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setLoginSubmitted(false);
    setSignupSubmitted(false);
    setLoginError("");
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setLoginSubmitted(false);
    setSignupSubmitted(false);
    setLoginError("");
  };

  return (
    <div className="container">
      {!loginSubmitted && !signupSubmitted && (
        <div className="button-group">
          <button
            style={{ backgroundColor: "black" }}
            onClick={handleSignupClick}>
            Register
          </button>
          <br />
          <br />
          <button
            style={{ backgroundColor: "black" }}
            onClick={handleLoginClick}>
            Login
          </button>
        </div>
      )}
      {showLogin && !loginSubmitted && (
        <form
          style={{ marginTop: "250px", marginLeft: "-150px" }}
          onSubmit={handleSubmit}
          className="form">
          <h6 style={{ textAlign: "center", color: "green" }}>Login</h6>

          <br />

          <label>
            Username:
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
              className="form-control form-group"
            />
          </label>

          <br />

          <label>
            Password:
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control form-group"
              required
            />
          </label>

          {loginError && <p style={{ color: "red" }}>{loginError}</p>}

          <br />

          <button className="btn btn-danger btn-block">Login</button>
        </form>
      )}
      {showSignup && !signupSubmitted && <Registration />}
    </div>
  );
}

export default Login;
