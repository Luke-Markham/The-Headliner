import React, { Component } from "react";

class WeatherWidget extends Component {
  state = {
    location: "",
    currentTemp: 0,
    maxTemp: 0,
    minTemp: 0,
    description: ""
  };

  roundTempDown = tempNum => {
    const down = Math.floor(tempNum);
    return down;
  };

  componentDidUpdate() {
    const apiKey = `645b8f7bda78cd5b6adaad3702d834e9`;
    const userLon = this.props.userLon;
    const userLat = this.props.userLat;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${userLat}&lon=${userLon}&units=imperial&appid=${apiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        const currentTemp = this.roundTempDown(data.main.temp);
        const minTemp = this.roundTempDown(data.main.temp_min);
        const maxTemp = this.roundTempDown(data.main.temp_max);
        this.setState({
          location: data.name,
          currentTemp: currentTemp,
          minTemp: minTemp,
          maxTemp: maxTemp,
          description: data.weather[0].description
        });
      })
      .catch(error => {
        console.log("there was an error", error);
      });
  }

  render() {
    return (
      <div className="weather-widget-container">
        <p>
          {this.state.location} <br />
          Now: {this.state.currentTemp}&#8451; - {this.state.description}
          <br /> Min: {""} {this.state.minTemp}&#8451; {""}
          Max: {""}
          {this.state.maxTemp}
          &#8451;
        </p>
      </div>
    );
  }
}

export default WeatherWidget;
