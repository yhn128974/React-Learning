import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

export default class Header extends Component {
  //对接收的props进行类型与必要性的限制
  static propTypes = {
    handerTodos: PropTypes.func.isRequired,
  };
  handleKeyUP = (event) => {
    if (event.keyCode !== 13) {
      return;
    } else {
      //trim()去除空格
      if (event.target.value.trim() === "") {
        return;
      } else {
        this.props.handerTodos(event.target.value);
      }
    }
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUP}
        />
      </div>
    );
  }
}
