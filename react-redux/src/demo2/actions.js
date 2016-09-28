import fetch from 'isomorphic-fetch'

export const Status_f5 = "Status_f5";
export const Status_xhr_request = "Status_xhr_requst";
export const Status_xhr_loading = "Status_xhr_loading";
export const Status_xhr_complete = "Status_xhr_complete";

export function at0(val){
	
	return {
		type:Status_a_step1,
		val
	}
}

export function at1(val){
	console.debug("a.actions.js~at1", val);
		
	return (dispatch, getState) => {
		
		let state = getState();
		
		// const
		console.debug("b.actions.js~at1.1", state, arguments );
		
		//
		dispatch({
			type:val,
			data:state.pd.list
		});
	}
}


export function at2(data){
	
	return {
		type:Status_xhr_loading,
		data
	}
}

// xhr 准备 
export function xhr_list_f5(data){
	
	return dispatch => {
		dispatch({
			type:Status_f5,
			data
		});
	};
	
}

// xhr 开始
export function xhr_list_get(data){
	// console.debug("a.actions.js~", data);
	
	return (dispatch) => {
		dispatch({
			type:Status_xhr_request
		});

		return fetch("http://assets.dxycdn.com/docs/files/items2.php")
		.then(response => response.json())
		.then(function(json){
			console.log("json",json);
			return dispatch({
				type:Status_xhr_complete,
				items:json.items
			});
		});

	}
}
/* 
function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}

//定义一个 change方法，将来把它绑定到props上
export function change(val){
	console.log("2.actions", val);
    return{
        type:"change",
        tVal:val
    }
}

export function it_save(val){
	// val:Object
	console.log("click.it_save", val);
    return{
        type:"it_save",
		tVal:val
    }
}

export function it_edit(obj){
	console.log("click.it.edit", obj);
    return{ type:"it_edit", tVal:obj.name, editId:obj.id };
}

export function it_del(){
    return{ type:"it_del" }
}

export function changeHandle(e){
	// console.info( this ); //undefind
	return (dispatch, getState) => {

		// const
		console.log("-", dispatch,getState() );

		//没有返回就执行加一
		dispatch(change(e.currentTarget.value));
	}
}

export function addFn1(val){
	return {type:"add",tVal:val};
}

export function tFn1(val){
	return {type:"temp",tVal:val};
} */