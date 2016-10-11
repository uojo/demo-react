import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {extend} from "jquery"
import * as Actions from './actions'
import reducer_1 from './reducer_1'

// console.log( extend );
// reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	
};

const reducer = combineReducers({
	reducer_1,
	form: reduxFormReducer // mounted under "form"
});

export default reducer;