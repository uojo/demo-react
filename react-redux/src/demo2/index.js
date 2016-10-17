import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
// import App from './containers/App'

import cfgStore from './store/cfg'

// 打印初始状态
// console.log("[1]~1.index.js~打印初始状态", store.getState(), store);

const store = cfgStore();


render(
	<Provider store={store}>
		<ReduxRouter />
	</Provider>,
	document.querySelector("#app")
);

