import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import createHistory from 'history/lib/createHashHistory'
// import api from './middleware_api'
import thunk from 'redux-thunk';
import reducer from '../reducers/reducer';
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
		module.hot.accept('../reducers/reducer', () => {
		  const nextRootReducer = require('../reducers/reducer')
		  store.replaceReducer(nextRootReducer)
		})
	}
	
	return store;

}

/* import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import DevTools from '../containers/DevTools'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)
	

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  
	const store = createStore(reducer, oriData, applyMiddleware( thunk ) );
	
	if(module.hot) {
		module.hot.accept();
	}
	
	return store;
	
} */


