import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

// HashRouter没有用上propos中的history属性从而导致state参数的丢失
import { HashRouter, BrowserRouter } from "react-router-dom";
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 用preovider包裹App，目的是所有app的后代组件都能接受store */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
// 使用了react-redux后不需要在手动调用store.subscribe
// store.subscribe(() => {
//   Root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// });
