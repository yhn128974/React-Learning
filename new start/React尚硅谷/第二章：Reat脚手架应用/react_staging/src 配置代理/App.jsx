import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getstudent = () => {
    axios
      .get("http://localhost:3000/api1/students")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  getCar = () => {
    axios
      .get("http://localhost:3000/api2/cars")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.getstudent}>点击发送</button>
        <button onClick={this.getCar}>点击发送</button>
      </div>
    );
  }
}
