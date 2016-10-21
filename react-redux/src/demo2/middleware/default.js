export default store => next => action => {
	// console.warn('1/3.dispatching', action);
	console.log(`%c1/3.dispatching:default`, `color: green`, action);
	
	// 将 action 传递给 reducer
	let result = next(action);
	// result===action //：true
	
	// console.info('3/3.next state', store.getState());
	
	return result;
}