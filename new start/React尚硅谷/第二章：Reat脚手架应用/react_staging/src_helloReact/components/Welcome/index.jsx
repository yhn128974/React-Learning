import "./index.css";
import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "longyou",
    }; 
  }

  render() {
    return <div className="Welcomeconter">wellcome Welcome!!!</div>;
  }
}
export default Welcome;
