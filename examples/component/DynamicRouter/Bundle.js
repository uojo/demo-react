import React from "react"

export default class Bundle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DynamicComponent: null
    }
  }

  loadDynamicComponent(){
    this.setState({
      DynamicComponent: null
    })
    this.props.load(cpt => {
      // console.log("cpt: ", cpt)
      this.setState({
        DynamicComponent: cpt ? cpt : null
      })
    })
  }

  componentWillMount() {
    this.loadDynamicComponent()
  }

  render() {
    return this.state.DynamicComponent ? this.props.children(this.state.DynamicComponent) : null
  }
}