import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import inputApp from './reducers'
import cStore from './store'

const store = cStore();
// let store = createStore(inputApp);
// console.log("-.store",store, store.getState() );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);