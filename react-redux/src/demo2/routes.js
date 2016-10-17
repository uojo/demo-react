import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import T1 from './containers/T1'
import { IndexRoute } from 'react-router';
// console.log(123)
export default (
	<Route path="/" component={App}>
		<Route path="/a" component={T1} />
	</Route>
)
