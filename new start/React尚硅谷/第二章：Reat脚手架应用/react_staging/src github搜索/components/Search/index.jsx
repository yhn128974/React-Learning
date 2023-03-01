import React, { Component } from "react";
import axios from "axios";

export default class index extends Component {
  search = () => {
    const {
      keyWordElement: { value: keyword },
    } = this;
    this.props.updataAppState({ isFirst: false, isLoading: true });
    axios
      .get(`/api/search/users?q=${keyword}`)
      .then((res) => {
        console.log(res);
        const { items } = res.data;
        this.props.updataAppState({ isLoading: false, users: items });
      })
      .catch((err) => {
        console.error(err);
        this.props.updataAppState({ isLoading: false, error: err });
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
