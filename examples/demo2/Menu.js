import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
	
	fn1(){
		console.log("push")
	}
	
	render() {
		
		
		return (
		  <div className="cpbox">
			<ul>
				<li><a onClick={this.fn1}>组件1（根）</a></li>
				<li><a>组件2（嵌套）</a></li>
			</ul>
		  </div>
		)
	}
}

export default Cp1