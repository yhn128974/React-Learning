import React, { Component } from "react";
import List from "./components/List";
import Search from "./components/Search";
export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: "",
  };
  updataAppState = (stateObj) => {
    this.setState({
      ...stateObj
    });
  };
  render() {
    return (
      <div className="container">
        <Search updataAppState={this.updataAppState} ></Search>
        <List {...this.state}></List>
      </div>
    );
  }
}
