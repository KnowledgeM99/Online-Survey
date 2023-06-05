import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../CSSFiles/Login.css";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const registered = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:4000/app/register", registered)
      .then((response) => {
        console.log(response.data);
        setEmail("");
        setPassword("");
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h6 style={{ textAlign: "center", color: "dark green" }}>Register</h6>

        {e && <p className="e">{e}</p>}
        <label>
          Username:
          <input
            type="text"
            placeholder="username"
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
        <br />
        {submitted && (
          <h5 style={{ color: "darkGreen", textAlign: "center" }}>
            Registered successfully!
          </h5>
        )}
        <br />
        <button className="btn btn-danger btn-block">Register</button>
      </form>
    </div>
  );
}

export default Registration;
