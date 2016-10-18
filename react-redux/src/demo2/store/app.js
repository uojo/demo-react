import { createStore, applyMiddleware } from 'redux';
// import api from './middleware_api'
import thunk from 'redux-thunk';
import reducer from '../reducers/app';
import createStore from './cfg'

// createStore第二个参数【可选】用于初始化 state
// let oriData = {type:"init",items:[{"id":1,"name":"张三","job":""}]};
// let oriData = {};
let oriData = undefined;

const store = createStore(reducer, oriData, applyMiddleware( thunk ) );

export default store;
