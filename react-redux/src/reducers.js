//reducer就是个function,名字随便你起，功能就是在action触发后，返回一个新的state(就是个对象)
const initD = {
	value:'default',
	items:[
		{"id":1,"name":"hello"}
	]
};

export default function change(state=initD, action){
	console.log("3.reducers", state, action);
	switch (action.type) {
		case "add":
			console.log()
			return {items:[
				{
					id:state.items.length+1,
					name:action.value
				},
				...state.items
			]};
			break;

		case "change":
			return Object.assign({},state,{
				value:action.value
			})
			break;

		case "edit":
			return Object.assign({},state,{
				value:action.value
			})
			break;

		case "delete":
			return Object.assign({},state,{
				value:action.value
			})
			break;

		default:
			return state;
	}
	/*
	if(action.type=="change"){
		state.value = action.value;
		// return state;
		return {
			value:action.value,
			items:action.items
		};
	}

	if(action.type=="add"){
		return {items:[
			{
				id:state.items.reduce((a,b)=>a.id+b.id),
				name:action.value
			},
			...state.items
		]};
	}

	return ;
	*/
}
