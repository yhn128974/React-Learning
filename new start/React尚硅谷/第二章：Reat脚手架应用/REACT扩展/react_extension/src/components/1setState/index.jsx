import React, { Component } from "react";

export default class index extends Component {
  state = { count: 0 };
  add = () => {
    // const { count } = this.state;
    // //   对象式的setstate
    // this.setState({ count: count + 1 }, () => {
    //   //   回调在程序更新完毕后被调用
    //   console.log(this.state.count);
    // });
    // console.log("12行的输出", this.state.count);

    //   函数式setstate
    this.setState(
      (state) => ({ count: state.count + 1 }),
      () => {
        console.log(this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点击加一</button>
      </div>
    );
  }
}
