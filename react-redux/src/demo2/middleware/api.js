import * as As from '../actions/list'
import fetch from 'isomorphic-fetch'
import {extend, param} from "jquery"

const request_add = (action,next) => {
	
	let pd = {
		name:action.name
	};
	console.log(2,pd);
	
	return fetch("http://assets.dxycdn.com/docs/files/add.php",{
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
		console.log("actions.js~response.add",json);
		if(json.result){
			return next({
				type:As.Status_listAdd_complete,
				payload:{
					id:json.result,
					name:pd.name
				}

			});
		}
	});
}

export default store => next => action => {
	console.warn('1/3.dispatching', action);
	
	// 添加
	if( action.type == As.Status_listAdd_request ){
		
		return request_add(action,next);
		
	}else{
		
		return next(action);
	}
	
}