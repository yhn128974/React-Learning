import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component {
  state = {
    hasError: "", //用于标识子组件是否产生错误
  };
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: error,
    };
  }

  // 当子组件出错时调用
  componentDidCatch() {
    console.log(
      "渲染组件出错，反馈给服务器，通知人员出错，注意只捕获生命周期函数中的错误"
    );
  }

  render() {
    return (
      <div>
        <h2> I am parent component</h2>
        {this.state.hasError ? (
          <h2>some thing was wrong Plase try again later</h2>
        ) : (
          <Child></Child>
        )}
      </div>
    );
  }
}

export default Parent;
