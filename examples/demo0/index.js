import React, { findDOMNode, Component } from 'react';
import { render } from 'react-dom'

// 热加载
if (module.hot) {
  module.hot.accept();
}

const d1 = [0,1,2];
const fn1 = (arr, app) => {
	return arr.map( (v,i)=>{
		return React.createElement(app,{"key":i});
		// return <C0 key={i} />;
	})
}

// 自定义组件
class C0 extends Component {
	render(){
		return (<div>test</div>)
	}
}

class C1 extends Component {
	
	
	render(){
		
		
		return (
			<div>
			{d1.map( (v,i)=>{
				return <C0 key={i} />
			})}
			</div>
		)
	}
}

// console.log( C1 );

render(
	<div>
		<C1 />
		{fn1(d1, C0)}
		
	</div>,
	document.getElementById('app')
);