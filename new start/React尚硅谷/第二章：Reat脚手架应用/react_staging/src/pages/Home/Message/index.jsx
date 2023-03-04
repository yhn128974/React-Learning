import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import MyNavLink from "../../../components/myNavLink";
import Detail from "./Detail";
export default class index extends Component {
  state = {
    messageArr: [
      {
        id: "02",
        title: "消息2",
      },
      {
        id: "04",
        title: "消息4",
      },
      {
        id: "06",
        title: "消息6",
      },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map((message) => {
            return (
              <li key={message.id}>
                <MyNavLink
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </MyNavLink>
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <Switch>
          <Route path="/home/message/detail/:id/:title" component={Detail} />
          {/* <Redirect to="/home/message/detail/:id/:title"></Redirect> */}
        </Switch>
      </div>
    );
  }
}
