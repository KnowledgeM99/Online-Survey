import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../CSSFiles/Main.css";
import Survey from "./MySurvey";
import WelcomePage from "./Home";
import SurveyList from "./SurveyRecordings";
import Calendar from "./Calender";
import DigitalWatch from "./DigitalWatch";
import NotFound from "./NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FaHome, FaPoll, FaFileAlt } from "react-icons/fa";

function Main(props) {
  const { onLogout } = props;

  return (
    <Router>
      <div className="Main">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                <FaHome />
              </Link>
            </li>
            <li>
              <Link to="/survey">
                <FaPoll />
                Survey
              </Link>
            </li>
            <li>
              <Link to="/records">
                <FaFileAlt />
                Records
              </Link>
            </li>
            <li>
              <Link to="/donation">Donate</Link>
            </li>
            <li>
              <button onClick={onLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <div className="container">
          <div className="left-sidebar">
            <Calendar />
          </div>
          <div className="main-content">
            <Routes>
              <Route
                path="/"
                element={<WelcomePage onStartSurvey={() => {}} />}
              />
              <Route path="/survey" element={<Survey />} />
              <Route path="/records" element={<SurveyList />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="right-sidebar">
            <DigitalWatch />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Main;
