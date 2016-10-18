import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

import da1 from './list'
import da2 from './r2'

// reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)

const rootReducer = combineReducers({
	da1,
	da2,
	router
})

export default rootReducer