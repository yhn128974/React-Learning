import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <NavLink className="list-group-item " to="/about">
                About
              </NavLink>
              <NavLink className="list-group-item " to="/home">
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Suspense fallback={<Loading></Loading>}>
                  <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/home" component={Home} />
                    <Redirect to="/home" />
                  </Switch>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
