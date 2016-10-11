export const Tag_load = 'redux-form-examples/account/LOAD'

// export const load = data => ({ type: LOAD, data })
export function form1_load1(data){
	return {
		type:Tag_load,
		data
	}
}

export function form1_load2(data){
	console.log(123);
	return {
		type:Tag_load,
		data
	}
}