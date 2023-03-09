import React from "react";
// 使用userparams参数接受组件转递的params
import { useParams,useMatch } from "react-router-dom";

export default function Detail() {
    const { id, title, content } = useParams();
    const x = useMatch('/home/message/detail/:id/:title/:content')
    console.log(x);
  return (
    <div>
      <ul>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{content}</li>
      </ul>
    </div>
  );
}
