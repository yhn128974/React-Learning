import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
  return (
    <div>
      <ul>
        {messages.map((message) => {
          return (
            <div key={message.id}>
              <Link
                to={`detail/${message.id}/${message.title}/${message.content}`}
              >
                click there to get message:{message.id}
              </Link>
            </div>
          );
        })}
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </div>
  );
}
