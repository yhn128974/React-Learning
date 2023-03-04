import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink
        activeclassname="active"
        className="list-group-item active"
        {...this.props}
      ></NavLink>
    );
  }
}
