import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
	
	constructor(props) {
		super(props)
		
		// this.state = {}
	}


	render(){
		// console.log(1, this.props);
		const {id,name, onEditBefore, onDel} = this.props;
		
		return (
			<li key={id}>{name}
				&nbsp;
				<a title="继承回调" onClick={(e) => onEditBefore()}>改</a>
				&nbsp;
				<a title="继承 actions 方法" onClick={() => onDel(id) }>删</a>
			</li>
		)
	}
}


export default Cp1
