import React, { Component } from "react";
import store from "./redux/store";
import Count from "./containers/Count";
export default class App extends Component {
  render() {
    return (
      <div>
        <Count ></Count>
      </div>
    );
  }
}
