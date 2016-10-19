import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
import api from '../middleware/api'
import thunk from 'redux-thunk'; //使action创建函数可以返回一个function代替一个action对象
import reducer from '../reducers/app';
import routes from '../routes';

const finalCreateStore = compose(

  applyMiddleware(thunk, api), // 包装 store 的 dispatch
  reduxReactRouter({ routes, createHistory })
  // applyMiddleware(createLogger()),
  // DevTools.instrument()
)(createStore)

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
