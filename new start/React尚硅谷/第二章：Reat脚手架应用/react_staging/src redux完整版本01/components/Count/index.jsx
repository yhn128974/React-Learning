import React, { Component } from "react";
//引入store，用于获取redux中的状态
import store from "../../redux/store";
import "./index.css";

import {
  createInCrementAction,
  createDeCrementAction,
} from "../../redux/count_action";

export default class Count extends Component {
  state = { ccarName: "123123" };
  // componentDidMount() {
  //   //检测redux中状态的变化，自动调用render
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }
  increment = () => {
    // console.log(this.selectNumber.value);
    const { value: data } = this.selectNumber;
    store.dispatch(createInCrementAction(data*1));
  };
  decrement = () => {
    const { value: data } = this.selectNumber;
    store.dispatch(createDeCrementAction(data*1));
  };
  incrementOfOdd = () => {
    const { value: data } = this.selectNumber;
    if (store.getState() % 2 !== 0) {
      store.dispatch(createInCrementAction(data*1));
    }
  };
  crementAsync = () => {
    const { value: data } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createInCrementAction(data*1));
    }, 500);
  };

  render() {
    return (
      <div>
        <h1>当前求和为{store.getState()}</h1>
        <div className="context">
          <select ref={(value) => (this.selectNumber = value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.incrementOfOdd}>当前求和为奇数在再加</button>
          <button onClick={this.crementAsync}>+异步加</button>
        </div>
      </div>
    );
  }
}
