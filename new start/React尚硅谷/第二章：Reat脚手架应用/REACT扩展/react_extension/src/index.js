import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
