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
    sideArticles: []
  };

  componentDidMount() {
    const newsApiKey = "272aff454dc34852acfba922ddc343be";
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLat: position.coords.latitude,
          userLon: position.coords.longitude
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
        <Header
          userLat={this.state.userLat}
          userLon={this.state.userLon}
          id="top"
        />
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
