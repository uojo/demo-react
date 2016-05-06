//定义一个change方法，将来把它绑定到props上
export function change(value){
	console.log("2.actions", value);
    return{
        type:"change",
        value:value
    }
}

export function c1(){
	console.log(arguments);
    return{
        type:"change"
    }
}

export function changeHandle(e){
// console.log("1.event");
// const node = ReactDOM.findDOMNode(this.refs.input);
// const value = node.value.trim();
// this.props.change(value);
	
  return (dispatch, getState) => {
    //获取state对象中的counter属性值
    /* const { value } = getState();
	console.log( value ); */
	
	
	// const 
	console.log("-", e.currentTarget.value, dispatch,getState());
	
    //没有返回就执行加一
    dispatch(change(e.currentTarget.value));
  }
}

