//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	editId: 0,
	tVal:'default',
	items:[
		{"id":1,"name":"hello","desc":"无"}
	]
};

export default function change(state=initD, action){
	console.log("3.reducers", state, action);
	switch (action.type) {
		case "add":
		
			return {
				items:[
					{
						id:state.items.length+1,
						name:action.tVal
					},
					...state.items
				]
			};
			break;

		case "it_save":
			
			
			return Object.assign({},state,{
				items:(state.items.map(it=>
					// console.log(it);
					it.id==state.editId? Object.assign( {}, it, action.tVal ) : it
				)),
				editId:0,
				tVal:""
			});
			break;

		case "it_edit":
			return Object.assign({},state,{
				tVal:action.tVal,
				editId:action.editId
			});
			break;
			
		case "change":
			return Object.assign({},state,{
				tVal:action.tVal
			});
			break;
			
		case "delete":
			return Object.assign({},state,{
				tVal:action.tVal
			})
			break;

		default:
			return state;
	}

}
