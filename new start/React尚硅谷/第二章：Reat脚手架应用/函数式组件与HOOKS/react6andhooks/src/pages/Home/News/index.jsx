import React from "react";
import {
  useNavigationType,
  useOutlet,
  useResolvedPath,
} from "react-router-dom";

export default function News() {
  // 判断Navigation类型
  console.log(useNavigationType());
  // useResolvedPath路由解析
  console.log(useResolvedPath("/user?id=001&age=longyou#qwe"));

  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  );
}
