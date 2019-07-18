import React, { Component } from "react";

class WeatherWidget extends Component {
  render() {
    const {
      location,
      currentTemp,
      minTemp,
      maxTemp,
      description
    } = this.props.weather;
    return (
      <div className="weather-widget-container">
        <p>
          {location} <br />
          Now: {currentTemp}&#8451; - {description}
          <br /> Min: {""} {minTemp}&#8451; {""}
          Max: {""}
          {maxTemp}
          &#8451;
        </p>
      </div>
    );
  }
}

export default WeatherWidget;
