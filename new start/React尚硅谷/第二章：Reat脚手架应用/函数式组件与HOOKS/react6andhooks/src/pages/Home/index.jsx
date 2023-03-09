import React, { useState } from "react";
import { NavLink, Outlet, useOutlet  } from "react-router-dom";

export default function Home() {
  const [sum, setSum] = useState(1);
  const isActive = ({ isActive }) => {
    return isActive ? "list-group-item atguigu" : "list-group-item";
  };

  // 查询当前所在层级的嵌套路由,当下级路由组件被挂载时输出下级层级，如果下层没有背挂在则为null
  // console.log(useOutlet());
  return (
    <div>
      <h3>我是Homet的内容</h3>
      {/* {sum === 2 ? (
        <Navigate to="/about"></Navigate>
      ) : (
        <h4>当前sum的值为{sum}</h4>
      )}

      <button
        onClick={() => {
          setSum((sum) => (sum = sum + 1));
        }}
      >
        click increment plus
      </button> */}

      <ul className="nav nav-tabs">
        <li>
          <NavLink className={isActive} to="news">
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={isActive} to="message">
            Message
          </NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
