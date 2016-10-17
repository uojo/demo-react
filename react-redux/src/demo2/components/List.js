import React, { PropTypes, Component } from 'react'
import Item from "../components/Item"

class Cp1 extends Component {
	
	constructor(props) {
		super(props)
		this.fn5 = this.fn1.bind(this)
	}

	fn1(e){
		console.info(e,this);
	}
	
	render(){
		// console.log(1,this.props);
		const {items} = this.props
		// console.log(1,this.props);
		
		return (
			<ul>
			{items.map( (it) =>
				<Item key={it.id} {...it} />
			)}
			</ul>
		)
	}
}


export default Cp1
