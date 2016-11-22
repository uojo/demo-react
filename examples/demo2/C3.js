import React, { PropTypes, Component } from 'react'
import Info from './Info'

class Cp1 extends Component {
	
	
	
	render(){
		// console.log("C3.render", this.props);
		
		const {children} = this.props;
		const {params, location, history} = this.props;
		console.log("C3.render.children", children);
		
		return (
			<div className="cpbox">
				<b>组件3（假设：页面A）</b>
				<Info params={params} location={location} history={history} />
				{children}
			</div>
		)
	}
  
}


export default Cp1
