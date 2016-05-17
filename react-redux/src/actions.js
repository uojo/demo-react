//定义一个change方法，将来把它绑定到props上
export function change(value){
	console.log("2.actions", value);
    return{
        type:"change",
        value:value
    }
}

export function c1(){
		console.log("click.c1",arguments);
    return{
        type:"change"
    }
}

export function it_edit(val){
		console.log("click.it.edit", val);
    return{ type:"it_edit" }
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
	return {type:"add",value:val};
}
