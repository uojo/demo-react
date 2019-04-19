import React from "react"
import { render } from "react-dom"
import {Menu} from "./Menu"
// import DynamicComponent from "./DynamicComponent/index"
import DynamicRouter from "./DynamicRouter/index"

render(
  <div>
    {/* <DynamicComponent></DynamicComponent> */}
    <Menu />
    <DynamicRouter></DynamicRouter>
  </div>,
  document.getElementById("app")
)

// 热加载
if (module.hot) {
  module.hot.accept()
}