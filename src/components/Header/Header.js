import React, { Component } from "react";
import DateCounter from "./Date";
import WeatherWidget from "./WeatherAPI";
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
          userLat={this.props.userLat}
          userLon={this.props.userLon}
        />
      </header>
    );
  }
}

export default Header;
