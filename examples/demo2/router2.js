import React, { Component } from 'react'
import { Router, hashHistory } from 'react-router';

import C1 from './C1'
import C2 from './C2'
import C21 from './C21'
import C3 from './C3'
import C31 from './C31'

const routes1 = {
  path: '/',
  component: C1,
  // indexRoute: { component: Dashboard },
  childRoutes: [
    { 
		path: 'c2',
		component: C2,
		childRoutes:[
			{path:"c21", component:C21}
		]
	},
    /* {
      path: 'c2',
      component: C2,
      childRoutes: [{
        path: 'messages/:id',
        onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
      }]
    }, */
    /* {
      component: C2,
      childRoutes: [{
        path: 'messages/:id', component: Message
      }]
    } */
  ]
}

const routes2 = [
	{path:'/', component:C1},
	{
		path:'/c2',
		indexRoute:{
			component:C2
		},
		childRoutes:[
			{path:"c21", component:C21}
		]
	},
	{
		path:'/c3', component:C3,
		childRoutes:[
			{path:"c31", component:C31}
		]
	},
]

class Cp1 extends Component {
	
	fn1(){
		console.log( this );
		/* routes.push({
			pathname:"c2",
			query:{q1:1},
			state:{s1:1}
		}); */
	}
	
	render(){
		
		return (
			<div className="cpbox">
				<b>路由2：通过配置对象申明</b>
				<p>
					<button onClick={this.fn1}>btn1</button>
				</p>
				<Router history={hashHistory} routes={routes2} />
			</div>
		)
	}

}

export default Cp1