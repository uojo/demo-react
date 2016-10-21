import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'
import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, Link, browserHistory, IndexLink } from 'react-router';

require("../common/demo.css");

// 默认跳转
// browserHistory.push("news/list")

let menu = name => (
	<div>{name}
		<ul>
			<li><a href="#/">路由：#/</a></li>
			<li><a href="#/2a">路由嵌套：#/2a</a> 回调 onEnter 重定向到 news/list</li>
			
			<li><a href="#/1">路由：#/1</a></li>
			
			<li><a href="#/news">路由：#/news</a></li>
			<li><a href="#/news/list">路由嵌套：#/news/list</a></li>
			<li><a href="#/news/detail/10">路由嵌套：#/news/detail/:id</a></li>
			<li><a href="#/news/error/7">路由跳转：#/news/error/:id</a></li>
		</ul>
		<ul>
			<li><Link to="/news" activeStyle={{color:"red"}} onlyActiveOnIndex={true}>Link组件替换A标签</Link> </li>
			<li><IndexLink to="/news/list" activeClassName="red">IndexLink 精准匹配</IndexLink> </li>
		</ul>
	</div>
)

class Cp0 extends Component {
  render() {
     return ( 
		this.props.children || menu("组件> 空")
	 )
  }
}

class Cp1 extends Component {
  render() {
     return ( menu("组件> 1") )
  }
}

class Cp2 extends Component {
  render() {
     return ( menu("组件> 2 （根）") )
  };
}

class Cp2a extends Component {
	render() {
		return menu("组件> 2a")
	}
}

class Cp3 extends Component {
  render() {
     return (<div className="bg1"> {this.props.children} </div>)
  };
}

// 匹配news/list
class Cp3a extends Component {
	componentDidMount(){
		console.log( "生命周期~componentDidMount", this.context.router, this.props, this.props.route ); 
		
		
	}
	
	render() {
		return menu("组件> 3/3a")
	}
}

// 匹配news/detail
class Cp3b extends Component {
	render() {
		return menu(`组件> 3/3b/${this.props.params.id}`)
	}
}

class App extends Component {
	
	 
	render() {
		console.log( "5.render", this.props );

		// const { params } = this.props;
		return (
			<Router history={hashHistory}>
				<Route path="/1" component={Cp1} />
				<Route path="/">
					<IndexRoute component={Cp2}/>
					<Route path="2a" onEnter={(nextState, replace)=> {console.info("route~2a", nextState, replace); replace("news/list");}} component={Cp2a}/>
				</Route>
				<Route path="news" component={Cp0}>
					{0 && <IndexRedirect to="/news/list" />}
					<Route path="list" component={Cp3a}/>
					<Route path="detail/:id" component={Cp3b}/>
					<Redirect from="error/:id" to="detail/:id"/>
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
  console.log("*",t1);
  return {
	  action,
	  dispatch
  };
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
