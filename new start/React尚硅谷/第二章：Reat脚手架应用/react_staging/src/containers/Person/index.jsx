import React, { Component } from "react";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";
import { nanoid } from "nanoid";
class Person extends Component {
  addPerson = () => {
    const age = this.age.value;
    const name = this.name.value;
    const id = nanoid();
    let person = {
      age,
      name,
      id,
    };
    this.props.createAddPersonAction(person);
  };
  render() {
    return (
      <div>
            <h2> I AM PEROSN Component, the top count is { this.props.count}</h2>
        <input
          type="text"
          placeholder="输入名字"
          ref={(c) => (this.name = c)}
        ></input>
        <input
          type="text"
          placeholder="输入年龄"
          ref={(c) => (this.age = c)}
        ></input>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map((person) => {
            return (
              <li key={person.id}>
                personName:{person.name},PersonAge:{person.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => {
        return {
            persons: state.perosnReducer,
            count: state.countReducer,
        };
  },
  {
    createAddPersonAction,
  }
)(Person);
