import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
  handleSave() {
      var text = this.refs.input.value
      // console.log(text);
      if(text){
        this.props.addFn1(text);
      }
  }

  handleToJSON() {
      console.log("toJSON");
  }

  render() {
    const {propsValue, changeHandle, c1} = this.props;
    return (
      <div>
      <input type='text' value={propsValue} onChange={changeHandle} ref="input"/>
      <button onClick={c1}>c1</button>
      <button onClick={this.handleSave.bind(this)}>add</button>
      <button onClick={this.handleToJSON.bind(this)}>toJSON</button>
      ( {propsValue} )

      </div>
    )
  }
}


export default Cp1
