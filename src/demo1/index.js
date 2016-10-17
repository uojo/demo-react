import React from 'react'
import { render } from 'react-dom'
import T1 from './components/T1.js'
import T2 from './components/T2.js'

// 引入样式
require("../common/base.css");

if (module.hot) {
  module.hot.accept();
}

render(
	<div>
		<T1 />
		<T2 />
	</div>,
	document.getElementById('app')
);