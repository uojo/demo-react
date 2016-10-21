import {extend} from "jquery"
import {T1} from '../actions/as21'

// console.log( extend );
// reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	msg:{
		a:1,
		b:2
	},
	count:0
}

export default function fn1(state=initD, action){
	// console.info( "0.reducer.js~r2", state, action );
	
	switch (action.type) {
		
		case T1:
			// 重新请求列表
			return extend(true, {}, state, {
				count:++state.count
			});
			
		case '@@redux/INIT':
		default:
			return state;
	};
	
};