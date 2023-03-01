import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class index extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyword },
    } = this;
    PubSub.publish("getGitubInfo", { isFirst: false, isLoading: true });
    axios
      .get(`/api/search/users?q=${keyword}`)
      .then((res) => {
        const { items } = res.data;
        PubSub.publish("getGitubInfo", { isLoading: false, users: items });
      })
      .catch((err) => {
        console.error(err);
        PubSub.publish("getGitubInfo", { isLoading: false, error: err.message });
        this.props.updataAppState();
      });
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
