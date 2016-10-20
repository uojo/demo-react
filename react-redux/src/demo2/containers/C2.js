// 容器
import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as As21 from '../actions/as21'
import Cp21 from '../components/Cp21'

// 引入样式
// require("../style/1.css");


class App extends Component {
	constructor(props) {
		super(props)
	}
	
	fn1(){
		
	}
	
	render() {		
		// console.debug( "容器2~render",this.props );
		const {actions, da2} = this.props;
		return (
			<div>
				子容器-2：受 routes 触发
				<Cp21 actions={actions} count={da2.count}/>
			</div>
		)
	};
}

//将reducers的return值注册到react的 props上
function mapStateToProps(state) {
	// console.log( "4.容器2~reducers->state=>props 将reducers的return值注册到react的 props", state );
	const { da2 } = state;
	
	return {
		da2
	};
}

function mapDispatchToProps(dispatch) {
	// console.warn("[1]~5.容器2~action.*=>props 将action的所有方法绑定到 props", As21, dispatch);

	return {
		actions: bindActionCreators(As21, dispatch)
	}
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
