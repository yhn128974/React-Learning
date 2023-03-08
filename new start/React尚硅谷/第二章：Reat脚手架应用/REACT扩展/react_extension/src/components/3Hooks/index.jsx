import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

export default function Hook() {
  const [count, setCount] = React.useState(0);

  // userEffect Hook 可以让你在函数组件中执行副操作（用于模拟类组件的生命周期钩子）
  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    //   函数的第一个参数的返回函数相当于componentswillunmount
    return () => {
      clearInterval(timer);
    };
  }, []);

  function add() {
    setCount((count) => count + 1);
  }

  function unmount() {
    createRoot(document.getElementById("root")).unmount();
  }

  const myRef = React.useRef();
  function showRef() {
    console.log(myRef.current.value);
  }
  return (
    <div>
      <input type="text" ref={myRef}></input>
      <h2>当前求和为{count}</h2>
      <button onClick={add}>click plus</button>
      <button onClick={unmount}>click unmount</button>
      <button onClick={showRef}> click Ref</button>
    </div>
  );
}
