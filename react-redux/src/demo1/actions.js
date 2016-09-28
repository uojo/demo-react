//定义一个change方法，将来把它绑定到props上
export function change(val){
	console.log("2.actions", val);
    return{
        type:"change",
        tVal:val
    }
}

export function it_save(val){
	// val:Object
	console.log("click.it_save", val);
    return{
        type:"it_save",
		tVal:val
    }
}

export function it_edit(obj){
	console.log("click.it.edit", obj);
    return{ type:"it_edit", tVal:obj.name, editId:obj.id };
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
	return {type:"add",tVal:val};
}

export function tFn1(val){
	return {type:"temp",tVal:val};
}