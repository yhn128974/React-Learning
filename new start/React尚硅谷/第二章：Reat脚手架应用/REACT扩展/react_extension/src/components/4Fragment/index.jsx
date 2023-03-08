import React, { Component, Fragment } from "react";

export default class A extends Component {
  render() {
    return (
      // Fragment 对比 </> 空标签优点在与可以传递key属性的同时也不会渲该节点
      <Fragment>
        <input type="text"></input>
      </Fragment>
    );
  }
}






