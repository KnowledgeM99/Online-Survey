import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import '../App.css'; 
import SurveyList from './SurveyRecordings';
import Survey from './MySurvey';

function NavBar(props) {
  const { onLogout } = props;

  return (
  <>
  <Router>

    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/survey">Survey</Link>
          </li>
          <li>
            <Link to="/Surveylist-records">Survey List</Link>
          </li>
           <li>
           <button onClick={onLogout} style={{ color: "white",
            backgroundColor: "#abb3b6", 
            fontSize: "17px", 
            fontWeight: "bold", 
            borderColor:"#abb3b6" , 
            position: "relative", 
            left: "700px", 
            borderRadius:"5px",
            }}>Logout</button>

          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Surveylist-records" element={<SurveyList />} />
        <Route path="/survey" element={<Survey />} />

        <Route path="/" element={<WelcomePage />} />
      </Routes>
      
    </div>
    
  </Router></>
  );
}

export default NavBar;
