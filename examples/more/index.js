import React from "react"
import { render } from "react-dom"
import FilterableProductTable from "./FilterableProductTable"
import MouseTracker from "./MouseTracker"

render(
  <div>
    <FilterableProductTable />
    <MouseTracker />
  </div>,
  document.getElementById("app")
)

// 热加载
if (module.hot) {
  module.hot.accept()
}