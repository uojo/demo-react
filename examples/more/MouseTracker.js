import React from "react"
import PropTypes from "prop-types"

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <div style={{ position: "absolute", left: mouse.x, top: mouse.y }} >cat</div>
    )
  }
}
Cat.propTypes = {
  mouse:PropTypes.object
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: "100%", border:"1px solid" }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    )
  }
}
Mouse.propTypes = {
  render:PropTypes.func.isRequired
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    )
  }
}

export default MouseTracker