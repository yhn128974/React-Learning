import React, { Component } from "react";
// import qs from "querystring";

const DetailData = [
  {
    id: "02",
    title: "消息2",
    content: "this is message two",
  },
  {
    id: "04",
    title: "消息4",
    content: "this is message four",
  },
  {
    id: "06",
    title: "消息6",
    content: "this is message six",
  },
];
export default class index extends Component {
  render() {
    console.log(this.props);
    //接收param参数
    // const { id, title } = this.props.match.params;

    //接收search参数
    // const { id, title } = qs.parse(this.props.location.search.slice(1));

    //接收state参数
    const { id, title } = this.props.location.state || {};

    const findResult = DetailData.find((detailobj) => {
      return detailobj.id === id;
    }) || {};
    // console.log(findResult);
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}
