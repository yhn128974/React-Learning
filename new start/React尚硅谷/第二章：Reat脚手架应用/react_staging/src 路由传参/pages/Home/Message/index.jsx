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
                {/* //传递params参数 */}
                {/* <MyNavLink
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </MyNavLink> */}

                {/* //search参数 */}
                {/* <MyNavLink
                  to={`/home/message/detail/?id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </MyNavLink> */}

                {/* 向路由传递state参数 */}
                <MyNavLink
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {message.title}
                </MyNavLink>
              </li>
            );
          })}
        </ul>
        <hr></hr>
        <Switch>
          {/* 接收params参数需要声明 */}
          {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

          {/* 接收search参数不需要声明 */}
          {/* <Route path="/home/message/detail" component={Detail} /> */}

          {/* 接收state参数无需声明接收，正常注册路由即可 */}
          <Route path="/home/message/detail" component={Detail} />

          {/* <Redirect to="/home/message/detail/:id/:title"></Redirect> */}
        </Switch>
      </div>
    );
  }
}
