import React from "react";
import { Link } from "react-router-dom";
import "../CSSFiles/Home.css";

function WelcomePage() {
  return (
    <div>
      <br />
      <br />
      <h1 style={{ color: "black", marginTop: "30px" }}>
        Online Shopping Survey
      </h1>
      <br />
      <p>
        You are one of just a few people we are asking, so your answers are very
        important to us. Please be as honest as possible as the result are
        anonymous. For most, you need only check a box or enter a line for your
        answer. The survey will prompt you to complete all questions. Overall,
        it will take about 5 minutes of your time.
      </p>
      <Link to="/survey">
        <button style={{ backgroundColor: "black" }}>Start the Survey</button>
      </Link>
    </div>
  );
}

export default WelcomePage;
