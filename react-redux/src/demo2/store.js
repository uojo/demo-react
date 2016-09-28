/* eslint no-extra-semi: "off", no-unreachable: "off", semi: "off" */

import { createStore, applyMiddleware } from 'redux';
// import api from './middleware_api'
import thunk from 'redux-thunk';
import reducer from './reducer';

// createStore第二个参数用于初始化 state
const store = createStore(reducer, {type:"init",items:[{"id":1,"name":"张三","job":""}]}, applyMiddleware( thunk ) );

export default store;
