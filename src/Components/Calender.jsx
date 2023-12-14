import React, { Component } from "react";
import moment from "moment";
import "../CSSFiles/Calendar.css";

class Calendar extends Component {
  state = {
    dateObject: moment(),
  };

  render() {
    const { dateObject } = this.state;

    const weekdaysShort = moment.weekdaysShort();

    // get current month and year
    const month = () => dateObject.format("MMMM");
    const year = () => dateObject.format("Y");

    // get number of days in current month
    const daysInMonth = () => dateObject.daysInMonth();

    // get the first day of the month
    const firstDayOfMonth = () =>
      moment(dateObject).startOf("month").format("d");

    // render calendar days
    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 80} className="calendar-day empty">
          {""}
        </td>
      );
    }

    let daysInMonthArray = [];
    for (let d = 1; d <= daysInMonth(); d++) {
      let className =
        d === moment().date() && dateObject.isSame(moment(), "month")
          ? "calendar-day current-day"
          : "calendar-day";
      daysInMonthArray.push(
        <td key={d} className={className}>
          {d}
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonthArray];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysList = rows.map((d, i) => {
      return <tr key={i * 100}>{d}</tr>;
    });

    return (
      <div className="calendar">
        <table className="calendar-month">
          <thead>
            <tr>
              <th colSpan="7">
                {month()} {year()}
              </th>
            </tr>
            <tr>
              {weekdaysShort.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{daysList}</tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
