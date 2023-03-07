import React, { Component } from "react";
import { connect } from "react-redux";

import {
  createInCrementAction,
  // createDeCrementAction,
  // createInCrementAsyncAction,
} from "../../redux/count_action";

class Count extends Component {
  addincrement = () => {
    this.props.increment(1);
  };
  render() {
    return (
      <div>
        <h1> 当前求和为{this.props.count}</h1>

        <div>
          <button onClick={this.addincrement}> Increment</button>
        </div>
      </div>
    );
  }
}

export default connect(
  // 映射redux状态
  (state) => {
    return { count: state };
  },
  // 映射操作状态的方法
  {
    increment: createInCrementAction,
  }
)(Count);
