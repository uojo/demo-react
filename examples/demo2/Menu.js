import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
	
	fn1(){
		console.log("push")
	}
	
	render() {
		
		return (
		  <div className="cpbox">
			导航（href 跳转，不跟随 query、state）：
			<ul>
				<li><a href="#">组件1（根）</a></li>
				<li><a href="#/c2">组件2</a>
					<ul>
						<li><a href="#/c2/c21">组件2-1（URL嵌套，组件【同级】渲染）</a></li>
					</ul>
				</li>
				<li><a href="#/c3">组件3</a>
					<ul>
						<li><a href="#/c3/c31">组件3-1（URL嵌套，组件【嵌套】渲染）</a></li>
					</ul>
				</li>
			</ul>
			<p>注意：</p>
			<ul>
				<li>同级组件：C1、C2、C21、C3</li>
			</ul>
		  </div>
		)
		
	}
}

export default Cp1