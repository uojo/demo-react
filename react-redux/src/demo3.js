import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './demo3/App'

import store from './demo3/store'

// 打印初始状态
console.log("[1]~1.index.js~打印初始状态", store.getState(), store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
