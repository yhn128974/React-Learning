import React, { Component } from "react";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/myNavLink";
import { Switch, Redirect, Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <ul className="nav nav-tabs">
          <li>
            <MyNavLink to="/home/news">NEWS</MyNavLink>
          </li>
          <li>
            <MyNavLink to="/home/message">MESSAGE</MyNavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    );
  }
}
