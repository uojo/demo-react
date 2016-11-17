import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {


	fn1(e){
		console.info(e,this);
	}

	render(){
		return (
			<div className="cpbox">
				组件2
			</div>
		)
	}
  
}


export default Cp1
