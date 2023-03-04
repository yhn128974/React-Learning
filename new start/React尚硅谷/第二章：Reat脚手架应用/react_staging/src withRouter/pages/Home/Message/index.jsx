import React, { Component } from "react";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import MyNavLink from "../../../components/myNavLink";
import Detail from "./Detail";
export default class index extends Component {
  go = () => {
    this.props.history.go(2);
  };
  goBack = () => {
    this.props.history.goBack();
  };
  goForward = () => {
    this.props.history.goForward();
  };
  replaceShow = (id, title) => {
    // replace+parms参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);
    // replace+search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`);
    //repalce+state参数
    this.props.history.replace(`/home/message/detail/`, { id, title });
  };
  pushShow = (id, title) => {
    // this.props.history.push(`/home/message/detail/${id}/${title}`);
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`);
    this.props.history.push(`/home/message/detail/`, { id, title });
  };
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
                {/* <Link
                  to={`/home/message/detail/${message.id}/${message.title}`}
                >
                  {message.title}
                </Link>
      
                {/* //search参数 */}
                {/* <Link
                  to={`/home/message/detail/? id=${message.id}&title=${message.title}`}
                >
                  {message.title}
                </Link>


                {/* 向路由传递state参数 */}
                <Link
                  replace
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: message.id, title: message.title },
                  }}
                >
                  {message.title}
                </Link>
                &nbsp;
                <button
                  onClick={() => {
                    this.pushShow(message.id, message.title);
                  }}
                >
                  push查看
                </button>
                &nbsp;
                <button
                  onClick={() => this.replaceShow(message.id, message.title)}
                >
                  replace查看
                </button>
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

        <hr></hr>
        <button onClick={this.goBack}>Back</button>
        <button onClick={this.goForward}>Forward</button>
        <button onClick={this.go}>GO</button>
      </div>
    );
  }
}
