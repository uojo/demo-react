import React, { PropTypes, Component } from 'react'

class Cp3 extends Component {
  detail(obj) {
      console.log("detail",this.props.da);
  }

  render() {
    const {da,as} = this.props;
    return (
      <li>
        <button onClick={this.detail.bind(this)}>{da.name}</button>
        <button onClick={()=> as.it_edit(da)}>edit</button>
        <button>x</button>
      </li>
    )
  }
}


export default Cp3
