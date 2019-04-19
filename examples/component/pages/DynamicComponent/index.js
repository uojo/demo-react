import React, {Component} from "react"

class App extends Component {
  constructor (props){
    super(props)
    this.state = {
      DynamicComponent:null
    }
  }

  doSomething() {
    require.ensure([], (require) => {
      const Comp = require("@examples/component/DynamicRouter/Component.cjs")
      this.setState({
        DynamicComponent:<Comp />
      })
    })
  }

  render () {
    return (
      <div>
        <span onClick={this.doSomething.bind(this)} >
           点击后，按需加载模块~
        </span>
        {this.state.DynamicComponent}
      </div>
    )
  }
}

export default App