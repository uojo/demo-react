import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import {extend} from "jquery"
import * as Actions from './actions'

// console.log( extend );
// reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	type:Actions.Status_init,
	list:{
		step:"init",
		items:[
		// {"id":1,"name":"张三","job":"无"}
		],
		pd:{
			list:{size:2, page:1}
		},
		pageBean:{
			current: 1, //当前页号
			total: 1, //总页数
			count: 0, //总记录数
			size: 10
		}
	},
	logs:["initBefore","initAfter"],
	edit:{
		index:0
	},
	add:{
		step:"hide",
		id:0,
		name:"默认名称"
	},
	del:{
		step:"",
		id:0,
		name:"默认名称"
	}
};

const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
});

export default reducer;