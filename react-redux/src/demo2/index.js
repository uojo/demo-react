import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import cfgStore from './store/cfg'


console.log("[1]~1.index.js~入口文件");

const store = cfgStore();

console.log("[1]~1.index.js~创建 store");

render(
	<Provider store={store}>
		<ReduxRouter />
	</Provider>,
	document.querySelector("#app")
);

