import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter,BrowserRouter } from "react-router-dom";
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);
