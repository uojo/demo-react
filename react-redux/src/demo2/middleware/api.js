import * as As from '../actions/list'
import fetch from 'isomorphic-fetch'
import {extend, param} from "jquery"

const request_add = (action, next) => {
	
	let pd = {
		name:action.name
	};
	console.log(2,pd);
	
	
	// fetch 啥都没返回
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
	console.log('%c1/3.dispatching:api', "color:green", action);
	
	let t1;
	// 添加
	if( action.type == As.Status_listAdd_request ){
		// 返回异步的函数
		t1 = request_add(action,next);
		
	}else{
		// 返回action对象
		t1 = next(action);
	}
	
	// console.info(action.type,typeof t1);
	return t1;
	
}



