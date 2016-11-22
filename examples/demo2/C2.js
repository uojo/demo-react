import React, { PropTypes, Component } from 'react'
import Info from './Info'

class Cp1 extends Component {

	fn1(){
		console.info(this);
		
		this.context.router.push({
			pathname:"c2/c21",
			query:{q2:2},
			state:{s2:2}
		});
	}

	render(){
		console.log("C2.render", this.props);
		const {params,location,history} = this.props;
		
		return (
			<div className="cpbox">
				<b>组件2（假设：页面A）</b>
				<Info params={params} location={location} history={history} />
				<p><button onClick={this.fn1.bind(this)}>同级 push 组件2-1</button></p>
			</div>
		)
	}
}

Cp1.contextTypes = {
	router:PropTypes.object
}

export default Cp1
