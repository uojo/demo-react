import { bindActionCreators } from 'redux';
import React, { findDOMNode, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Cp1 from './Cp1';
import Cp2 from './Cp2';
import * as action from './actions'

class App extends Component {
  render() {
	   console.log( "5.render", this.props );
     const {propsValue,items, as} = this.props;
     return (
        <div>
          <Cp1 propsValue={propsValue} items={items} as={as} />
          <Cp2 items={items} as={as}/>
        </div>
      )
  };
}

function mapStateToProps(state) {
	console.log( "4.StateToProps", state );
	return {
		propsValue: state.value,
    items: state.items
	}
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  let t1 = bindActionCreators(action, dispatch);
  console.log("*",t1);
	return {as:t1};
}

//将state的 "指定值" 映射在props上，将 action的 "所有方法" 映射在props上
export default connect(mapStateToProps, mapDispatchToProps)(App);
