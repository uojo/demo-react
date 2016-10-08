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
	}
};

export default function reducer(state=initD, action){
	console.info( "0.reducer.js", state, action );
	let _state;
	
	switch (action.type) {
		
		case Actions.Status_f5:
			// 重新请求列表
			return extend(true, {}, state, {
				list:{
					step:"send"
				},
				logs:[
					"xhr send",
					...state.logs
				]
			});
			
		case Actions.Status_xhr_request:
			// 开始请求列表数据
			return extend(true, {}, state, {
				list:{
					step:"loading"
				},
				logs:[
					"xhr loading",
					...state.logs
				]
			});
		
		case Actions.Status_xhr_complete:
			// 列表请求发送完毕
			_state = extend(true, {}, state,{
				type: Actions.Status_xhr_complete,
				list: {
					step:"complete",
					pageBean: action.pageBean
				},
				logs:[
					"xhr complete",
					...state.logs
				]
			});
			_state.list.items = action.items;
			// console.log( 20, _state );
			
			return _state;
		
		case Actions.Status_page_go:
			// 翻页
			let t_cur, pbD = state.list.pageBean;
			
			
			if(action.data=="prev"){
				if(pbD.current==1){
					return state;
				}
				
				t_cur = pbD.current - 1;
			}
			
			if(action.data=="next"){
				// 下一页
				if(pbD.current==pbD.total){
					return state;
				}
				
				t_cur = pbD.current + 1;
			}
			
				t_cur = t_cur<1?1:t_cur;
				t_cur = t_cur>pbD.total?pbD.total:t_cur;
			
			
			return extend(true, {}, state,{
				list:{
					step:"send",
					pageBean:{
						current:t_cur
					}
				}
			});
			
		case Actions.Status_listAdd_show:
			return extend(true, {}, state,{
				add:{
					step:"show"
				}
			});
		
		case Actions.Status_listAdd_request:
			return extend(true, {}, state,{
				add:{
					step:"loading",
					name:action.name
				}
			});
		
		case Actions.Status_listAdd_complete:
			return extend(true, {}, state,{
				add:{
					step:"complete",
					id:action.id
				},
				list:{
					items:[
						{id:action.id, name:state.add.name},
						...state.list.items
					]
				}
			});
			
		case '@@redux/INIT':
			return state;
		
		default:
			return state;
	};
	
	
	
};