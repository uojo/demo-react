import React, { PropTypes, Component } from 'react'
import Info from './Info'

class Cp1 extends Component {


	fn1(){
		console.info("C31",this);
		const {query,state} = this.props.location;
		
		this.context.router.push({
			pathname:"c3/c31",
			query:Object.assign({},query,{q2:2}),
			state:Object.assign({},state,{s1:15}),
		});
	}

	render(){
		const {params, location, history} = this.props;
		
		return (
			<div className="cpbox">
				<b>组件3-1（假设：页面A中的一个模块）</b>
				<Info params={params} location={location} history={history} />
				<p><button onClick={this.fn1.bind(this)}>change：附加 query、改变 state</button></p>
			</div>
		)
	}
  
};

Cp1.contextTypes = {
	router:PropTypes.object
}

export default Cp1;
