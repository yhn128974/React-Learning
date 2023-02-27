import React, { Component } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
export default class app extends Component {
  //状态在哪里操作状态的方法就在哪里
  state = {
    todos: [
      { id: "001", name: "eating", done: true },
      { id: "002", name: "sleeping", done: true },
      { id: "003", name: "coding", done: false },
    ],
  };
  handerTodos = (name) => {
    let todo = {
      id: nanoid(),
      name: name,
      done: false,
    };
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  handleClearing = (id) => {
    // console.log(id);
    let todos = this.state.todos;
    let newtodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newtodos });
  };

  handleChangeDone = (id, value) => {
    console.log(id, value);
    let { todos } = this.state;
    let newtodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: value };
      } else {
        return todo;
      }
    });
    this.setState({ todos: newtodos });
  };
  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Header handerTodos={this.handerTodos}></Header>
            <List
              todos={this.state.todos}
              handleClearing={this.handleClearing}
              handleChangeDone={this.handleChangeDone}
            ></List>
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}
