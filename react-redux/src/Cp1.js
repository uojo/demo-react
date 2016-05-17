import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
  handleSave() {
      var text = this.refs.input.value
      // console.log(text);
      if(text){
        this.props.as.addFn1(text);
      }
  }

  handleToJSON() {
      console.log("toJSON",this.props.items);
  }

  render() {
    const {propsValue, as} = this.props;
    return (
      <div>
      <input type='text' value={propsValue} onChange={as.changeHandle} ref="input"/>
      <button onClick={as.c1}>c1</button>
      <button onClick={this.handleSave.bind(this)}>add</button>
      <button onClick={this.handleToJSON.bind(this)}>toJSON</button>
      ( {propsValue} )

      </div>
    )
  }
}


export default Cp1
