import React, { findDOMNode, Component } from 'react';
import { render } from 'react-dom'


// import RouterX from './router1'
import RouterX from './router2'


import Menu from './Menu'



// 热加载
if (module.hot) {
  module.hot.accept();
}

render(
	<div>
		<Menu />
		<RouterX />
	</div>,
	document.getElementById('app')
);

/* render(
	<RouterX />
	document.getElementById('app')
); */