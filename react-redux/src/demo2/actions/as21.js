export const T1 = "T1";

export function as1(val){
	console.debug("actions.js~at1", val);
	
	return (dispatch, getState) => {
		
		let state = getState();
		//
		dispatch({
			type:val,
			data:state.val
		});
	}
}


export function as2(data){
	
	// console.log("a21");
	return {
		type:T1,
		data
	}
	
}