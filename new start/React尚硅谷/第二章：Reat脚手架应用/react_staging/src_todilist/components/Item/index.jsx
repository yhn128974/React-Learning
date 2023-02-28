import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  handeMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  clearing = () => {
    let id = this.props.id;
    if (window.confirm("确定删除吗？")) {
      this.props.handleClearing(id);
    }
  };
  handleCheck = (event) => {
    let id = this.props.id;
    this.props.handleChangeDone(id, event.target.checked);
  };
  render() {
    const { id, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
        onMouseEnter={this.handeMouse(true)}
        onMouseLeave={this.handeMouse(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck} />
          <span>{name}</span>
        </label>
        <button
          onClick={this.clearing}
          className="btn btn-danger"
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
