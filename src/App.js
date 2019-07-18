import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainArticles from "./components/MainArticles";
import SubArticles from "./components/subArticles";
import SideArticles from "./components/sideArticles";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    userLat: 0,
    userLon: 0,
    articles: [],
    subArticles: [],
    sideArticles: [],
    weather: {
      location: "",
      currentTemp: 0,
      minTemp: 0,
      maxTemp: 0,
      description: ""
    }
  };

  roundTempDown = tempNum => {
    const down = Math.floor(tempNum);
    return down;
  };

  componentDidMount() {
    const newsApiKey = "272aff454dc34852acfba922ddc343be";
    const weatherApiKey = `645b8f7bda78cd5b6adaad3702d834e9`;

    navigator.geolocation.getCurrentPosition(
      position => {
        let userLat = position.coords.latitude;
        let userLon = position.coords.longitude;
        this.setState({
          userLat: userLat,
          userLon: userLon
        });
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            this.state.userLat
          }&lon=${this.state.userLon}&units=imperial&appid=${weatherApiKey}`
        )
          .then(response => {
            return response.json();
          })
          .then(data => {
            const currentTemp = this.roundTempDown(data.main.temp);
            const minTemp = this.roundTempDown(data.main.temp_min);
            const maxTemp = this.roundTempDown(data.main.temp_max);
            this.setState({
              weather: {
                location: data.name,
                currentTemp: currentTemp,
                minTemp: minTemp,
                maxTemp: maxTemp,
                description: data.weather[0].description
              }
            });
          })
          .catch(error => {
            console.log("there was an error", error);
          });
      },
      error => {
        alert("Sorry, we can't give you your weather without your location");
      }
    );

    // main article fetch -=-=-=-=-=-=-=-=-=-=-=-=-=-=
    fetch(
      `https://newsapi.org/v2/top-headlines?pageSize=5&country=us&apiKey=${newsApiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ articles: data.articles });
      });

    // sub article fetch =-=-=--=-=-=-=-=-=-=-=-=-=-=

    fetch(
      `https://newsapi.org/v2/top-headlines?category=science&pageSize=3&country=us&apiKey=${newsApiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ subArticles: data.articles });
      });

    // side article fetch =-=-=--=-=-=-=-=-=-=-=-=-=-=

    fetch(
      `https://newsapi.org/v2/top-headlines?category=business&pageSize=6&country=us&apiKey=${newsApiKey}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ sideArticles: data.articles });
      });
  }

  render() {
    return (
      <div className="App">
        <Header weather={this.state.weather} id="top" />
        <div className="main-content-wrapper">
          <main className="main-articles">
            <MainArticles mainArticle={this.state.articles} />
          </main>
          <section className="sub-articles">
            {" "}
            <SubArticles subArticle={this.state.subArticles} />{" "}
          </section>
          <aside className="side-articles">
            <SideArticles sideArticle={this.state.sideArticles} />
          </aside>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
