import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import api_default from '../middleware/default'
import api from '../middleware/api'
import thunk from 'redux-thunk'; //使action创建函数可以返回一个function代替一个action对象
import reducer from '../reducers/app';
import routes from '../routes';

// compose 返回一个增强型的 dispatch
const finalCreateStore = compose(
	applyMiddleware(thunk, api, api_default ), // 包装 store 的 dispatch
	reduxReactRouter({ routes, createHistory })
)(createStore);

export default function configureStore(initialState) {
	
	const store = finalCreateStore( reducer );
	
	if(module.hot) {
		// module.hot.accept();
		module.hot.accept('../reducers/app', () => {
		  const nextRootReducer = require('../reducers/app')
		  store.replaceReducer(nextRootReducer)
		})
	}
	
	return store;
	
}
