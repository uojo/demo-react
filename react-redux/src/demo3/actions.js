import fetch from 'isomorphic-fetch'
import {extend,param} from "jquery"
export const Status_init = "Status_init";
export const Status_f5 = "Status_f5";

export const Status_xhr_request = "Status_xhr_requst";
export const Status_xhr_loading = "Status_xhr_loading";
export const Status_xhr_complete = "Status_xhr_complete";
export const Status_page_go = "Status_page_go";

export const Status_listAdd_show = "Status_listAdd_show";
export const Status_listAdd_request = "Status_listAdd_request";
export const Status_listAdd_loading = "Status_listAdd_loading";
export const Status_listAdd_complete = "Status_listAdd_complete";

export const Status_itDel_before = "Status_itDel_before";
export const Status_itDel_loading = "Status_itDel_loading";
export const Status_itDel_complete = "Status_itDel_complete";

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

// main init 
export function main_init(data){
	
	return dispatch => {
		
		dispatch( xhr_list_f5() );
		
	};
	
}

// 翻页：上下
export function pageBean_go(data){
	console.log("actions.js~pageBean_go",data);
	return {
		type:Status_page_go,
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
	// console.debug("a.actions.js~xhr_list_get", data);
	// console.debug("JSON", JSON.stringify({a:1,b:2}), JSON);
	
	let pd = extend({
		current:1
	},data);
	
	return (dispatch) => {
		dispatch({
			// 发送请求
			type:Status_xhr_request
		});
		
		return fetch("http://assets.dxycdn.com/docs/files/items2.php?page="+pd.current,{
			method:"GET",
			// body: "a:1",
			/* headers: {
				"Content-Type": "application/json"
			} */
		})
		.then(response => response.json())
		.then(function(json){
			console.log("actions.js~response",pd.current,json);
			return dispatch({
				type:Status_xhr_complete,
				items:json.items,
				pageBean:json.pageBean
			});
		});

	}
}


export function list_add_show(data){
	console.debug("a.actions.js~list_add_show", data);
	return {
		type:Status_listAdd_show,
		data
	}
}

export function list_add_send(data){
	console.debug("a.actions.js~list_add_send", data);
	return {
		type:Status_listAdd_request,
		name:data
	}
}

export function xhr_add_request(data){
	// console.debug("a.actions.js~xhr_list_get", data);
	// console.debug("JSON", JSON.stringify({a:1,b:2}), JSON);
	
	let pd = extend({
		name:""
	},data);
	
	return (dispatch) => {
				
		return fetch("http://assets.dxycdn.com/docs/files/add.php",{
			method:"POST",
			// body: JSON.stringify(data),
			// body: "name=100&t=99",
			// body: data,
			body: param(data),
			headers: {
				// "Content-Type": "application/json"
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
			},
			// credentials:"omit"
		})
		.then(response => response.json())
		.then(function(json){
			console.log("actions.js~response.add",json);
			if(json.result){
				return dispatch({
					type:Status_listAdd_complete,
					id:json.result
				});
			}
		});

	}
}


export function it_del(id){
	console.debug("a.actions.js~it_del", id);
	
    return {
        type:Status_itDel_before,
        id
    }
}

export function it_del_request(pd){
	console.debug("a.actions.js~it_del_request", pd);
	
    return (dispatch) => {
		
		dispatch({
			type:Status_itDel_loading,
			id:pd.id
		});
		
		return fetch("http://assets.dxycdn.com/docs/files/del.php",{
			method:"POST",
			// body: JSON.stringify(data),
			// body: "name=100&t=99",
			// body: data,
			body: param(pd),
			headers: {
				// "Content-Type": "application/json"
				"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
			},
			// credentials:"omit"
		})
		.then(response => response.json())
		.then(function(json){
			console.log("actions.js~response.del",json);
			if(json.success){
				return dispatch({
					type:Status_itDel_complete,
					id:pd.id
				});
			}
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