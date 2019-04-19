import React, { Component } from "react"
import PropTypes from "prop-types"

const createElements = (items, Comp) => {
  return items.map( (v,i)=>{
    return React.createElement(Comp,{"name":v,"key":i})
  })
}

// es6 class to define
class Item extends Component {

  render(){
    return (<div>{this.props.name}</div>)
  }
}
Item.propTypes={
  name:PropTypes.string
}

class Fruits extends Component {
  render(){
    return (
      <div>
        {["apple","banana"].map( (v,i)=>{
          return <Item name={v} key={i} />
        })}
      </div>
    )
  }
}

// js function to define
function Title(props){
  return <h4>{props.content}</h4>
}
Title.propTypes={
  content:PropTypes.string.isRequired
}

class App extends Component{
  render(){
    return (
      <div>
        <Title content="Fruits"></Title>
        <Fruits />
        <Title content="Colors"></Title>
        {createElements(["blue","green"], Item)}
      </div>
    )
  }
}

export default App
