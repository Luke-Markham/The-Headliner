import React, { Component } from "react";
import DateCounter from "./DateWidget";
import WeatherWidget from "./WeatherWidget";
class Header extends Component {
  render() {
    return (
      <header>
        <div className="main-title">
          <hr className="hr" />
          <h1>The Headliner</h1>
          <hr className="hr" />
        </div>

        <DateCounter className="date-counter" />
        <WeatherWidget
          className="weather-widget"
          weather={this.props.weather}
        />
      </header>
    );
  }
}

export default Header;
