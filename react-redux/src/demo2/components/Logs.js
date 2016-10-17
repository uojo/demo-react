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
		// console.log(1,this.props);
		const {data} = this.props
		
		return (
			<div>
				<div>Logs:{data.length}</div>
				<textarea rows="10" value={ data.join("\n") } readOnly ></textarea>
			</div>
		)
	}
}


export default Cp1