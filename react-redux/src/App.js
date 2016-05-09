import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as action from './actions'

class App extends Component {
  render() {
	   console.log( "5.render", this.props );
     const {propsValue,changeHandle,c1} = this.props;
     return (
        <div>
          <input type='text' value={propsValue} onChange={changeHandle} ref="input"/>
      		<button onClick={c1}>1</button>
      		<br/> ->
      		{propsValue}
        </div>
      )
  };
}

function mapStateToProps(state) {
	console.log( "4.StateToProps", state );
	return {
		propsValue: state.value
	}
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	return bindActionCreators(action, dispatch)
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
