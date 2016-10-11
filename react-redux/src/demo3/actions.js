export const Tag_load = 'redux-form-examples/account/LOAD'

// export const load = data => ({ type: LOAD, data })
export function load(data){
	return {
		type:Tag_load,
		data
	}
}