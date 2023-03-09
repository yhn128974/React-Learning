import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Message from "../pages/Home/Message";
import News from "../pages/Home/News";
import Detail from "../pages/Home/Message/Detail";

export default [
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/home",
    element: <Home></Home>,
    children: [
      {
        path: "/home/message",
        element: <Message></Message>,
        children: [
          // params传参
          // {
          //   path: "/home/message/detail/:id/:title/:content",
          //   element: <Detail></Detail>,
          // }
          //search and sdata 传参
          {
            path: "/home/message/detail",
            element: <Detail></Detail>,
          },
        ],
      },
      {
        path: "/home/news",
        element: <News></News>,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/about"></Navigate>,
  },
] || [];
