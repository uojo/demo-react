import React, { PropTypes, Component } from 'react'
import {ui_item_ctrl} from '../actions/item';


class Cp1 extends Component {
	
	constructor(props) {
		super(props)
		// this.fn5 = this.fn1.bind(this)
	}


	edit() {
		this.props.dispatch( ui_item_ctrl("edit", this.props) );
	}

	render(){
		console.log(this.props);
		const {id,name} = this.props
		
		return (
			<li key={id}>{name}
				&nbsp;
				<a onClick={(e) => this.edit()}>改</a>
				&nbsp;
				<a onClick={() => this.list_remove_one(id) }>删</a>
			</li>
		)
	}
}


export default Cp1
