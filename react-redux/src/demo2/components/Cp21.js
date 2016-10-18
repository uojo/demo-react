import React, { PropTypes, Component } from 'react'


class Cp1 extends Component {
	
	constructor(props) {
		super(props)
		// this.state = {count:0};
		// this.fn5 = this.fn1.bind(this)
	}
	
	fn1(){
		this.props.actions.as2();
	}

	render(){
		// console.log(21,this.props);
		const {actions, count} = this.props;
		
		return (
			<ul>
				<li>dispatch? no，容器 》组件1 》组件2 ;&nbsp;
					更改 store 中的数据：
					<button onClick={()=>this.fn1()}>this</button>&nbsp;
					<button onClick={actions.as2}>inline</button>&nbsp;
					count:<b>{count}</b>
				</li>
			</ul>
		)
	}
}


export default Cp1
