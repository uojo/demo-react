import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './demo2/App'

import store from './demo2/store'
import 'isomorphic-fetch';

// 打印初始状态
console.log("1.打印初始状态",store.getState(), store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
