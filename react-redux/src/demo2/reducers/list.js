import {extend} from "jquery"
import * as Actions from '../actions/list'

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
		step:"",
		pd:{
			id:0,
			name:""
		}
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
	},
	ui:{
		itemCtrl:""
	}
};

export default function fn1(state=initD, action){
	// console.info( "2/3~0.reducer.js~list", state, action );
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
			
		case Actions.UI_item_ctrl:
			return extend(true, {}, state, {
				ui:{
					itemCtrl:action.itemCtrl
				},
				edit:{
					pd:action.data
				}
			});
		
		case Actions.S_item_saveAfter:
			_state = extend( true, {}, state, {
				edit:{
					step:"complete"
				},
				list:{
					items:state.list.items.map(it=>
						it.id===action.pd.id?action.pd:it
					)
				}
			});
			
			
			return _state;
		
		case Actions.Status_listAdd_complete:
			return extend(true, {}, state,{
				list:{
					items:[
						action.payload,
						...state.list.items
					]
				}
			});
			
		case Actions.Status_itDel_before:
			return extend(true, {}, state,{
				del:{
					step:"remove",
					id:action.id
				}
			});
			
		case Actions.Status_itDel_complete:
			
			_state = extend(true, {}, state,{
				del:{
					step:"success"
				}
			});
			_state.list.items = state.list.items.filter( it => it.id!=action.id );
			
			return _state;
			
		case '@@redux/INIT':
		default:
			return state;
	};
	
};
