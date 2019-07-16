import React, { Component } from "react";

class DateCounter extends Component {
  state = {
    weekDayNameCounter: 0,
    monthNameCounter: 0,
    dayOfTheMonth: "",
    year: 1971,

    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "Janurary",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  };

  componentDidMount() {
    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const dayOfMonthNow = dateNow.getDate();
    const monthNow = dateNow.getMonth();
    const yearNow = dateNow.getFullYear();

    this.setState({
      weekDayNameCounter: dayNow,
      monthNameCounter: monthNow,
      dayOfTheMonth: dayOfMonthNow,
      year: yearNow
    });
  }
  render() {
    return (
      <div className="date-container">
        <p>
          {this.state.days[this.state.weekDayNameCounter]},{" "}
          {this.state.months[this.state.monthNameCounter]}{" "}
          {this.state.dayOfTheMonth}, {this.state.year}
        </p>
      </div>
    );
  }
}

export default DateCounter;
