import { bindActionCreators, createStore, combineReducers } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Form1 from './Form1';
import * as Actions from './actions'
import { reducer as reduxFormReducer } from 'redux-form'
// 引入样式
require("./1.css");
  

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {  // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })
  
class App extends Component {
	
	//初始化渲染后触发，只执行一次
	componentDidMount() {
		console.warn('[1]~lifecycle.初始化渲染后触发');
		
	}

	//每次接受新的props触发
	componentWillReceiveProps(nextProps) {
		console.warn('lifecycle.每次接受新的props触发',nextProps);
		
	}
	
	
	render() {
		console.debug( "6.app.js~render 更新组件视图", this.props );
		
		const {add, list, logs} = this.props;
		const SimpleForm = require("./Form1").default
		
		
		console.log(1, SimpleForm===Form1, SimpleForm);
		
		return (
			<div>
				<Form1 onSubmit={showResults} />
			</div>
		)
	};
}

//将reducers的return值注册到react的props上
function mapStateToProps(state) {
	const { logs, list, add, del } = state;
	console.log( "4.app.js~reducers->state=>props 将reducers的return值注册到react的 props", state );
	return {
		logs,
		list,
		add,
		del
	};
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	let _action = bindActionCreators(Actions, dispatch);
	console.warn("[1]~5.app.js~action.*=>props 将action的所有方法绑定到 props", _action);
	return {
		as:_action,
		dispatch
	};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
