import { Status_f5, Status_xhr_request, Status_xhr_loading, Status_xhr_complete } from './actions'

//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	list:{
		status:"init",
		items:[]
	},
	pd:{
		list:{size:2,page:1}
	},
	logs:["initBefore","initAfter"],
	edit:{
		index:0
	},
	addOne:{
		name:"默认名称"
	},
	items:[
		// {"id":1,"name":"张三","job":"无"}
	]
};

export default function reducer(state=initD, action){
	console.info( "0.reducer.js", state, action );
	switch (action.type) {
		case 'GET_POST_PENDING':
			return {
				isPending: true
			};
		
		case 'GET_POST_FULFILLED':
			return {
				body: action.payload.body
			};
		
		case 'get':
			return {
				body: "hello response"
			};
		
		case Status_f5:
			let rlt = Object.assign({},state,{
				logs:[
					"xhr send",
					...state.logs
					
				]
			});
			rlt.list.status = "send"; 
			
			return rlt;
			
			/* return {
				...state,
				list:{
					...state.list,
					status:"send"
				},
				logs:[
					"xhr send",
					...state.logs
				]
			}; */
			
		case Status_xhr_request:
				
			// 异步请求
			return Object.assign({},state,{
				list:{status:"loading"},
				logs:[
					"xhr loading",
					...state.logs
					
				]
			});
		
		case Status_xhr_complete:
				
			// 异步请求
			return Object.assign({},state,{
				type: Status_xhr_complete,
				list: {
					status:"complete",
					items: action.items
				},
				logs:[
					"xhr complete",
					...state.logs
					
				]
			});
			
		case '@@redux/INIT':
			return Object.assign({}, initD, {
			  list:{
				 items: state.items 
			  }
			});
		
		default:
			return state;
	};
};