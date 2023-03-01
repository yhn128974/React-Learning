import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;
    return (
      <div className="row">
        {isFirst ? (
          <h2>hello wellcome</h2>
        ) : isLoading ? (
          <div>loading...</div>
        ) : error !== "" ? (
          <div style={{ color: "red" }}>{error.message}</div>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a rel="noreferrer" href={user.html_url} target="_blank">
                  <img
                    alt="head_portrait"
                    src={user.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
