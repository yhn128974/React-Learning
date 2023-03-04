import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  go = () => {
    this.props.history.go(2);
  };
  goBack = () => {
    this.props.history.goBack();
  };
  goForward = () => {
    this.props.history.goForward();
  };
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.goBack}>Back</button>
            <button onClick={this.goForward}>Forward</button>
            <button onClick={this.go}>GO</button>
          </div>
        </div>
      </div>
    );
  }
}

// 暴露普通组件Hear附加router组件特有的API
export default withRouter(Header);
