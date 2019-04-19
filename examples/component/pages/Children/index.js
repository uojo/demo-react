import React, {Component} from "react"

const NotesList = React.createClass({
  render: function() {
    return (
      <ol>
        {
          React.Children.map(this.props.children, function (child) {
            return <li>{child}</li>
          })
        }
      </ol>
    )
  }
})

class App extends Component{
  render(){
    return (
      <NotesList>
        <span>hello</span>
        <span>world</span>
      </NotesList>
    )
  }
}

export default App