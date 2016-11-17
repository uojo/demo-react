import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
	
	fn1(){
		console.log( "props", this.props );
		const { context } = this;
		const {router, routes, history} = this.props;
		
		console.log("context", context);
		console.log("router", router);
		console.log("routes", routes);
		
		// 跳转
		history.push({
			pathname:"c2",
			query:{q1:1},
			state:{s1:1}
		});
	}
	
	render(){
	
		console.log("C1",this);

		return (
			<div className="cpbox">
				组件1
				<p><button onClick={this.fn1.bind(this)}>to 组件2</button></p>
			</div>
		)
		
	}
}

module.exports = Cp1;