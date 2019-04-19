import React, { Component } from "react"

class App extends Component {
  
  static defaultProps = {
    title:"触发自定义方法"
  }

  constructor(props) {
    super(props)
    this.fn5 = this.echo.bind(this)
  }

  echo(e){
    // console.log(e,this)
  }

  render(){
    return (
      <div className="mt10">
        {this.props.title}
        <ul>
          <li><a onClick={this.echo()}> this.echo()</a> 立即执行，不能被触发</li>
          <li><a onClick={this.fn5}> 在 constructor 内执行了 bind </a></li>
          <li><a onClick={(e)=>this.echo(e)}> (e)=>this.echo(e) </a></li>
          <li><a onClick={this.echo.bind(this)}> this.echo.bind(this) </a></li>
        </ul>
      </div>
    )
  }
  
}


export default App
