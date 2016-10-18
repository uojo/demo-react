import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
// import api from './middleware_api'
import thunk from 'redux-thunk';
import reducer from '../reducers/app';
import routes from '../routes';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory })
  // applyMiddleware(createLogger()),
  // DevTools.instrument()
)(createStore)

const oriData = undefined;

export default function configureStore(initialState) {
  
	const store = finalCreateStore(reducer, oriData, applyMiddleware( thunk ) );
	
	if(module.hot) {
		// module.hot.accept();
		module.hot.accept('../reducers/app', () => {
		  const nextRootReducer = require('../reducers/app')
		  store.replaceReducer(nextRootReducer)
		})
	}
	
	return store;
	
}
