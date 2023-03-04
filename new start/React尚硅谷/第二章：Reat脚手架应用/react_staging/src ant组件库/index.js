import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// HashRouter没有用上propos中的history属性从而导致state参数的丢失
import { HashRouter, BrowserRouter } from "react-router-dom";
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
