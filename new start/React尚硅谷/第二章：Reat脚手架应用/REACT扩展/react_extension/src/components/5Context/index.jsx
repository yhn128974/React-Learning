import React, { Component } from "react";

// 创建Context对象
const UserNameContext = React.createContext("default-value");
const { Provider, Consumer } = UserNameContext;

class A extends Component {
  state = { username: "longyou" };
  render() {
    const { username } = this.state;
    return (
      <div>
        <h1> THIS IS A Component</h1>
        <Provider value={{ username, age: "34" }}>
          <B></B>
        </Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS B Component</h1>
        <C></C>
        <D></D>
      </div>
    );
  }
}

class C extends Component {
  //声明使用context
  static contextTpye = UserNameContext;
  render() {
    console.log(this.context);
    const { username, age } = this.context;
    return (
      <div>
        <h1>THIS IS C Component</h1>
        <h2>
          {username},{age}
        </h2>
      </div>
    );
  }
}

function D() {
  return (
    <div>
      <Consumer>
        {(value) => {
          
          return `name:${value.username},age:${value.age}`;
        }}
      </Consumer>
    </div>
  );
}

export default A;