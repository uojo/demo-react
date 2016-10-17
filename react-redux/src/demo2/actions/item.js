import fetch from 'isomorphic-fetch'
import {extend, param} from "jquery"

export const UI_item_ctrl = "UI_item_ctrl";
export const S_item_saveBefore = "S_item_saveBefore";
export const S_item_saveAfter = "S_item_saveAfter";


export function ui_item_ctrl(itemCtrl,data){
	return {
		type:UI_item_ctrl,
		itemCtrl,
		data
	}
}

export function ui_item_change(data){
	return {
		type:UI_item_ctrl,
		itemCtrl:"edit",
		data
	}
}

export function ui_item_save(data){
	
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