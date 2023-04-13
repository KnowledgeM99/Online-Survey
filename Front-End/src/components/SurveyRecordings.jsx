import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CssFolder/SurveyList.css';

const SurveyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/app/feedback');
      setData(response.data);

      
    };

    fetchData();
  }, []);

  const exportCSV = () => {
    const surveyName = "ONLINE_SHOPPING_SURVEY"; 
    const csvContent = "data:text/csv;charset=utf-8," +
      data.map(row => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${surveyName}_RESULTS.csv`);
    document.body.appendChild(link);
    link.click();
  };

  return (

    <><br /><div>
      <h1 style={{color:"green"}}>Survey List</h1>
      <br/>
      <table className="survey-list">
        <thead>
          <tr>
          <th>Date Submitted</th>
          <th>Age Range</th>
            <th>Gender</th>
            <th>Feedback</th>
            <th>Why do you prefer online shopping? (choose as many as applicable)</th>
            <th>Which products you would like to see on our store?</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.created_at}</td>
              <td>{item.ageRange}</td>
              <td>{item.gender}</td>
              <td>{item.feedback}</td>
              <td>{item.options.map((option) => option.name + ': ' + option.value).join(', ')}</td>
              <td>{item.dropdownValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="export-button" onClick={exportCSV}>Export as CSV</button>
    </div></>
  );
};

export default SurveyList;
