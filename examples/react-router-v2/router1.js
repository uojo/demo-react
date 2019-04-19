import React, { PropTypes, Component } from "react"
import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, Link, browserHistory, IndexLink } from "react-router"

import C1 from "./C1"
import C2 from "./C2"
import C21 from "./C21"


const Cp1 = React.createClass({
	
  render:function(){
    return (
      <Router history={hashHistory}>
        <Route path="/" component={C1} />
        <Route path="/c2">
          <IndexRoute component={C2}/>
          <Route path="c21" component={C21}/>
        </Route>
      </Router>
    )
  }

})




module.exports = Cp1