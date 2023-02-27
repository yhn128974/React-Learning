import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default class app extends Component {
  state = {
    todos: [
      { id: "001", name: "eating", done: true },
      { id: "002", name: "sleeping", done: true },
      { id: "003", name: "coding", done: false },
    ],
  };
  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header></Header>
            <List todos={this.state.todos}></List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
