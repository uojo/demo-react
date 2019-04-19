var React = require("react")
var App = React.createClass({
  getInitialState: function () {
    return {
      opacity: 1.0
    }
  },
  getDefaultProps(){
    return {label:"组件"}
  },
  render: function () {
    return (
      <div className="productBox" style={{opacity:this.state.opacity}}>
        {this.props.label}(React.createClass){this.props.title}
      </div>
    )
  }
})

export default App