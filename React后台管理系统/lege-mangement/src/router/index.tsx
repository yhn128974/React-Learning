// 导入React对象与 lazy函数
import React, { lazy } from "react";

import Home from "../views/Home";
// import About from '../views/About'
// import User from '../views/User'

// 执行lazy函数得到返回对象
const About = lazy(() => import("../views/About"));
const User = lazy(() => import("../views/User"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
import { Navigate } from "react-router-dom";

const withLadingComponent = (component: JSX.Element) => (
  <React.Suspense
    fallback={
      <div>
        <p>Loading...</p>
      </div>
    }
  >
    {component}
  </React.Suspense>
);

export default [
  {
    path: "/",
    element: <Navigate to="/home/page1" />,
  },
  {
    path: "/home",
    element: <Home></Home>,
    children: [
      {
        path: "/home/page1",
        element: withLadingComponent(<Page1 />),
      },
      {
        path: "/home/page2",
        element: withLadingComponent(<Page2 />),
      },
      {
        path: "/home/about",
        element: withLadingComponent(<About />),
      },
      {
        path: "/home/user",
        // 在懒加载时需要再外层套一个同步组件
        element: withLadingComponent(<User />),
      },
    ],
  },
];
