import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
 
 	constructor(props) {
		super(props)
		this.fn5 = this.fn1.bind(this)
	}

	fn1(e){
		console.info(e,this);
	}

	render(){
		return (
			<div className="mt10">
				组件2：如何触发自定义方法
				<ul>
					<li><a onClick={this.fn1()}> this.fn1() </a> 可以被执行，不能被触发</li>
					<li><a onClick={this.fn5}> this.fn5 </a></li>
					<li><a onClick={(e)=>this.fn1(e)}> (e)=>this.fn1(e) </a></li>
					<li><a onClick={this.fn1.bind(this)}> this.fn1.bind(this) </a></li>
				</ul>
			</div>
		)
	}
  
}


export default Cp1
