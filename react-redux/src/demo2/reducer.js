import {extend} from "jquery"
import { Status_page_go, Status_init, Status_f5, Status_xhr_request, Status_xhr_loading, Status_xhr_complete } from './actions'

// console.log( extend );
// reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	type:Status_init,
	list:{
		status:"init",
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
		name:"默认名称"
	}
};

export default function reducer(state=initD, action){
	console.info( "0.reducer.js", state, action );
	switch (action.type) {
		
		case Status_f5:
			// 异步请求
			
			return extend(true, {}, state, {
				list:{
					status:"send"
				},
				logs:[
					"xhr send",
					...state.logs
				]
			});
			
		case Status_xhr_request:
			// 异步请求
			
			return extend(true, {}, state, {
				list:{
					status:"loading"
				},
				logs:[
					"xhr loading",
					...state.logs
				]
			});
		
		case Status_xhr_complete:
			// 异步请求
			
			return extend(true, {}, state,{
				type: Status_xhr_complete,
				list: {
					status:"complete",
					items: action.items,
					pageBean: action.pageBean
				},
				logs:[
					"xhr complete",
					...state.logs
				]
			});
		
		case Status_page_go:
			// 翻页
			let t_cur, pbD = state.list.pageBean;
			if(action.data=="prev"){
				// 上一页
				t_cur = pbD.current - 1;
				t_cur = t_cur<1?1:t_cur;
				t_cur = t_cur>pbD.total?pbD.total:t_cur;
				
			}
			
			if(action.data=="next"){
				// 上一页
				
			}
			
			return extend(true, {}, state,{
				list:{
					pageBean:{
						current:t_cur
					}
				}
			});
			
		case '@@redux/INIT':
			return state;
		
		default:
			return state;
	};
};