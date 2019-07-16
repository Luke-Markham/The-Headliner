import React, { Component } from "react";
import Date from "./Header/Date";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Date />
        <h4>The Headliner</h4>
        <a href="#top">Back To Top</a>
      </footer>
    );
  }
}

export default Footer;
