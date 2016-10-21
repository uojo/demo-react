import fetch from 'isomorphic-fetch'
import {extend,param} from "jquery"
export const Status_init = "Status_init";
export const Status_f5 = "Status_f5";

export const Status_xhr_request = "Status_xhr_requst";
export const Status_xhr_loading = "Status_xhr_loading";
export const Status_xhr_complete = "Status_xhr_complete";
export const Status_page_go = "Status_page_go";

export const Status_listAdd_request = "Status_listAdd_request";
export const Status_listAdd_complete = "Status_listAdd_complete";

export const UI_item_ctrl = "UI_item_ctrl";
export const S_item_saveBefore = "S_item_saveBefore";
export const S_item_saveAfter = "S_item_saveAfter";

export const Status_itDel_before = "Status_itDel_before";
export const Status_itDel_loading = "Status_itDel_loading";
export const Status_itDel_complete = "Status_itDel_complete";

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

// xhr 准备刷新列表
export function xhr_list_f5(data){
	
	return dispatch => {
		dispatch({
			type:Status_f5,
			data
		});
	};
	
}

// xhr 获取列表数据
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

// 保存编辑
export function item_edit_save(data){
	
	return (dispatch) => {
		
		dispatch({
			// send
			type:S_item_saveBefore
		});
		
		
		setTimeout(()=>{
			fetch("http://assets.dxycdn.com/docs/files/edit.php",{
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
				console.log("actions.js~response.edit",json);
				if(json.result){
					return dispatch({
						type:S_item_saveAfter,
						pd:data
					});
				}
			});
		},200);
	}
}

// 保存添加
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

// 删除
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
