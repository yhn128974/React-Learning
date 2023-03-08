import React, { Component } from "react";

class Index extends Component {
  render() {
    return (
      <div>
        <A render={(username) => <B username={username} />}></A>
      </div>
    );
  }
}

class A extends Component {
  state = {
    username: "longyou",
  };
  render() {
    const { username } = this.state;
    return (
      <div>
        <h3>THIS IS A COMMENT!</h3>
        {this.props.render(username)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log(this.props);
    return <div>THIS IS B COMPONENT</div>;
  }
}

export default Index;
