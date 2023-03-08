import React, { Component } from "react";

class Child extends Component {
  state = {
    users: [
      { id: "001", name: "tom", age: 18 },
      { id: "002", name: "jack", age: 34 },
      { id: "003", name: "Alice", age: 34 },
      { id: "004", name: "Ben", age: 64 },
    ],
  };
  render() {
    return (
      <div>
        <h2> I am children component</h2>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id}>
                The name is {user.name}, the age is {user.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Child;
