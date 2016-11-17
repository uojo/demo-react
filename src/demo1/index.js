import React from 'react'
import { render } from 'react-dom'
import C1 from './C1.js'
import C2 from './C2.js'

// 引入样式
require("../common/base.css");

if (module.hot) {
  module.hot.accept();
}

render(
	<div>
		<C1 />
		<C2 />
	</div>,
	document.getElementById('app')
);