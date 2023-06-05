import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSSFiles/SurveyList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SurveyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/app/feedback");
      setData(response.data);
    };

    fetchData();
  }, []);

  const exportCSV = () => {
    const surveyName = "ONLINE_SHOPPING_SURVEY";
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${surveyName}_RESULTS.csv`);
    document.body.appendChild(link);
    link.click();
  };

  const deleteRecord = async (id) => {
    await axios.delete(`http://localhost:4000/app/feedback/${id}`);
    setData(data.filter((item) => item._id !== id));
  };

  return (
    <>
      <div>
        <h1>Survey List</h1>

        <table className="survey-list">
          <thead>
            <tr>
              <th>Date Submitted</th>
              <th>Age Range</th>
              <th>Gender</th>
              <th>Feedback</th>
              <th>
                Why do you prefer online shopping? (choose as many as
                applicable)
              </th>
              <th>Which products you would like to see on our store?</th>
              <th style={{ color: "red" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.created_at}</td>
                <td>{item.ageRange}</td>
                <td>{item.gender}</td>
                <td>{item.feedback}</td>
                <td>
                  {item.options
                    .map((option) => option.name + ": " + option.value)
                    .join(", ")}
                </td>
                <td>{item.dropdownValue}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => deleteRecord(item._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="export-button" onClick={exportCSV}>
          Export as CSV
        </button>
      </div>
    </>
  );
};

export default SurveyList;
