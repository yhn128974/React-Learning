import React, { Component } from "react";
import { Redirect ,BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home1 from "./pages/Home1";
import About from "./pages/About";
import MyNavLink from "./components/myNavLink";

import Header from "./components/Header";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}

              {/* <NavLink
                activeClassName="active"
                className="list-group-item active"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="active"
                className="list-group-item"
                to="/home"
              >
                Home
              </NavLink> */}

              <MyNavLink to="/atguigu/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
              <MyNavLink to="/">Home1</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Routes>
                  <Route path="/atguigu/about" element={<About></About>} />
                  <Route path="/home" element={<Home></Home>} />
                  <Route path="/" element={<Home1></Home1>} />
                  <Redirect to="/home"></Redirect>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
