import React from 'react'
import ReactDOM from 'react-dom/client'
//************************************************************************************************样式引入顺序
// 1.初始化样式
import "reset-css"
// 2.UI样式库

// 全局样式
import "@/assets/styles/global.scss"
// 3.组件样式
//************************************************************************************************
import App from "./App"
import Router from './router'

import { BrowserRouter } from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App ></App>
    </BrowserRouter>
  </React.StrictMode>,
)
