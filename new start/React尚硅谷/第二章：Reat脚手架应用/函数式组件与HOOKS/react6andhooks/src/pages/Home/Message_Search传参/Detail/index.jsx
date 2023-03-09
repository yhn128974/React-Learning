import React from "react";
// 使用userparams参数接受组件转递的params
import { useSearchParams, useLocation } from "react-router-dom";

export default function Detail() {
  const [search, setSearch] = useSearchParams();
  const id = search.get("id");
  const title = search.get("title");
  const content = search.get("content");
  const x = useLocation();
  console.log("@", x);
  return (
    <div>
      <ul>
        <button onClick={() => setSearch("id=005&title=haha&content=xixi")}>
          click there to change the searchData
        </button>
        <li>id:{id}</li>
        <li>title:{title}</li>
        <li>content:{content}</li>
      </ul>
    </div>
  );
}
