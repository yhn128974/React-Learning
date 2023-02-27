import React, { Component } from "react";
import Item from "../Item";
import "./index.css";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    handleClearing: PropTypes.func.isRequired,
    handleChangeDone:PropTypes.func.isRequired
  }
  render() {
    return (
      <ul className="todo-main">
        {this.props.todos.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              handleClearing={this.props.handleClearing}
              handleChangeDone={this.props.handleChangeDone}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
