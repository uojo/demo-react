import React, { PropTypes, Component } from 'react'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, Link, browserHistory, IndexLink } from 'react-router';

import C1 from './C1'
import C2 from './C2'


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
			<Router history={hashHistory}>
				<Route path="/" component={C1} />
				<Route path="/c2">
					<IndexRoute component={C2}/>
					<Route path="2a" onEnter={(nextState, replace)=> {console.info("route~2a", nextState, replace); replace("news/list");}} component={C2}/>
				</Route>
			</Router>
		)
	}
  
}

module.exports = Cp1;