import React from "react"
import { Router, Route, hashHistory } from "react-router"
import {menuItems} from "../Menu"
import RouteComps from "./RouteComps"

class Root extends React.Component {
  render(){
    return (
      <div>
      Root {this.props.children}
      </div>
    )
  }
}

class Index extends React.Component {
  render(){
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Root}>
          {
            menuItems.map((v,i)=>(
              <Route key={i} path={v} component={RouteComps[v]}></Route>
            ))
          }
        </Route>
      </Router>
    )
  }
}


export default Index
