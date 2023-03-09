import React from "react";
import { useNavigate, useInRouterContext } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    // 判断组件是否被路由包裹
//   console.log("**", useInRouterContext());
  function back() {
    navigate(-1);
  }

  function forward() {
    navigate(1);
  }

  return (
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
        </div>
        <button onClick={back}>前进</button>
        <button onClick={forward}>后退</button>
      </div>
    </div>
  );
}
