import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {


	fn1(e){
		// console.info(e,this);
		const {router, routes, history} = this.props;
		
		history.push({
			pathname:"c2/c21",
			query:{q2:2},
			state:{s2:2}
		});
	}
	
	render(){
		return (
			<div className="cpbox">
				<b>组件2</b>
				<p><button onClick={this.fn1.bind(this)}>push 组件2-1</button></p>
			</div>
		)
	}
  
}


export default Cp1
