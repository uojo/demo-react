import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
// import store from './store0'
import cStore from './store'
const store = cStore();

console.log("index.js-store", store, store.getState() );

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#app")
);
