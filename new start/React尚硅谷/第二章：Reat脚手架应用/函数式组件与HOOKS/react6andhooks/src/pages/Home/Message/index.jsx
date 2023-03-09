import React, { useState } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [messages] = useState([
    {
      id: "001",
      title: "  Hi~ o(*￣▽￣*)ブthere is a message for you",
      content: `hi this is message one`,
    },
    {
      id: "002",
      title: "  Hi~ o(*￣▽￣*)ブthere is a message for you",
      content: `hi this is message two`,
    },
    {
      id: "003",
      title: "  Hi~ o(*￣▽￣*)ブthere is a message for you",
      content: `hi this is message three`,
    },
  ]);

  const navigate = useNavigate();

  function showDetails(message) {
    navigate("detail", {
      replace: false,
      state: {
        id: message.id,
        title: message.title,
        content: message.content,
      },
    });
  }

  return (
    <div>
      <ul>
        {messages.map((message) => {
          return (
            <div key={message.id}>
              <Link
                to={`detail`}
                state={{
                  id: message.id,
                  title: message.title,
                  content: message.content,
                }}
              >
                click there to get message:{message.id}
              </Link>
              <button
                onClick={() => {
                  showDetails(message);
                }}
              >
                点击跳转
              </button>
            </div>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
