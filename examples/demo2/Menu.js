import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
	
	fn1(){
		console.log("push")
	}
	
	render() {
		
		
		return (
		  <div className="cpbox">
			导航
			<ul>
				<li><a href="#">组件1（根）</a></li>
				<li><a href="#/c2">组件2（嵌套）</a>
					<ul>
						<li><a href="#/c2/c21">组件2（嵌套）</a></li>
					</ul>
				</li>
			</ul>
		  </div>
		)
	}
}

export default Cp1