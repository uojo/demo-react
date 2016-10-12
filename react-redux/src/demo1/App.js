import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'
import { Router, Route, hashHistory } from 'react-router';

require("../common/base.css");

let menu = name => (
	<div>{name}
		<ul>
			<li><a href="#/1">路由：#/1</a></li>
			<li><a href="#/2a">路由嵌套：#/2a</a></li>
			<li><a href="#/news/list">路由嵌套：#/news/list</a></li>
			<li><a href="#/news/detail/10">路由嵌套：#/news/detail/:id</a></li>
		</ul>
	</div>
)

class Cp1 extends Component {
  render() {
     return ( menu("组件> 1") )
  }
}

class Cp2 extends Component {
  render() {
     return (<div> {this.props.children} </div>)
  };
}

class Cp2a extends Component {
	render() {
		return menu("组件> 2a")
	}
}

class Cp3 extends Component {
  render() {
     return (<div> {this.props.children} </div>)
  };
}

class Cp3a extends Component {
	render() {
		return menu("组件> 3/3a")
	}
}

class Cp3b extends Component {
	render() {
		return menu(`组件> 3/3b/${this.props.params.id}`)
	}
}

class App extends Component {
  render() {
	 console.log( "5.render", this.props );
     const {tVal, items, as} = this.props;
     return (
		<Router history={hashHistory}>
			<Route path="/1" component={Cp1}/>
			<Route path="/" component={Cp2}>
				<Route path="/2a" component={Cp2a}/>
			</Route>
			<Route path="news" component={Cp2}>
				<Route path="list" component={Cp3a}/>
				<Route path="detail/:id" component={Cp3b}/>
			</Route>
		</Router>
      )
  };
}

//将reducers的return值注册到react的props上
function mapStateToProps(state) {
	console.log( "4.StateToProps", state );
	return {};
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  let t1 = bindActionCreators(action, dispatch);
  // console.log("*",t1);
  return {
	  action,
	  dispatch
  };
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
