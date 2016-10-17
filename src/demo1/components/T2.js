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
			<ul>
			<li><a onClick={this.fn5}>one</a></li>
			<li><a onClick={(e)=>this.fn1(e)}>two</a></li>
			</ul>
		)
	}
  
}


export default Cp1
