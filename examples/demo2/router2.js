import React, { Component } from 'react'
import { Router, hashHistory } from 'react-router';

import C1 from './C1'
import C2 from './C2'


const routes = {
  path: '/',
  component: C1,
  // indexRoute: { component: Dashboard },
  childRoutes: [
    { path: '/c2', component: C2 },
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
				<button onClick={this.fn1}>btn1</button>
				<Router history={hashHistory} routes={routes} />
			</div>
		)
	}

}

export default Cp1