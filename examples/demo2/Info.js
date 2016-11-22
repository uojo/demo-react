import React, { PropTypes, Component } from 'react'

const r1={
	pathname:"/c2",
	query:{q1:1},
	state:{s1:10}
}

const r2={
	pathname:"/c2/c21",
	query:{q1:2},
	state:{s1:11}
}

const r3={
	pathname:"/c3",
	query:{q1:3},
	state:{s1:13}
}

const r4={
	pathname:"/c3/c31",
	query:{q1:4},
	state:{s1:14}
}

class Cp1 extends Component {
	
	fnc2(){
		this.context.router.push(r1)
	}
	
	fnc21(){
		this.context.router.push(r2)
	}
	
	fnc3(){
		this.context.router.push(r3)
	}
	
	fnc31(){
		this.context.router.push(r4)
	}
	
	render() {
		const {params, history, location:{query,pathname,search,state,action,key}} = this.props;
		console.log( "Info.render.this", this );
		/*
		console.log("Info.render.props", this.props);
		console.log("Info.render.props.params", params);
		console.log("Info.render.props.history", history);
		console.log("Info.render.props.location", location);
		*/
		return (
		  <table className="mt10 tbarea">
			<tbody>
				<tr>
				<td width="60%">
					URL参数：
					<ul>
						<li>params: {JSON.stringify(params)} </li>
						<li>query: {JSON.stringify(query)} </li>
						<li>pathname: {JSON.stringify(pathname)} </li>
						<li>search: {JSON.stringify(search)} </li>
						<li>state: {JSON.stringify(state)} </li>
						<li>action: {JSON.stringify(action)} </li>
						<li>key: {JSON.stringify(key)} </li>
						<li><b>location:</b><br/>
							<textarea className="ttjson" value={JSON.stringify(location, null, 2)} readOnly ></textarea>
						</li>
					</ul>
				</td>
				<td>
					跳转（跟随query、state）：
					<ul>
						<li><a onClick={this.fnc2.bind(this)} >组件2：</a><p>{JSON.stringify(r1)}</p>
							<ul>
								<li><a onClick={this.fnc21.bind(this)} >组件2-1：</a>
								<p>{JSON.stringify(r2)}</p>
								</li>
							</ul>
						</li>
						<li><a onClick={this.fnc3.bind(this)} >组件3：</a>
							<p>{JSON.stringify(r3)}</p>
							<ul>
								<li><a onClick={this.fnc31.bind(this)} >组件3-1：</a>
									<p>{JSON.stringify(r4)}</p>
								</li>
							</ul>
						</li>
						
					</ul>
				</td>
				</tr>
			</tbody>
		  </table>
		)
	}
}

Cp1.contextTypes = {
	router:PropTypes.object
}

export default Cp1