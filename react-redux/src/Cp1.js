import React, { PropTypes, Component } from 'react'

class Cp1 extends Component {
  handleAdd() {
      var text = this.refs.input.value
      // console.log(text);
      if(text){
        this.props.as.addFn1(text);
      }
  }
  
  changeHandle() {
	
  }
  
  handleToJSON() {
      console.info("toJSON",this.props.items);
  }

  render() {
    const {tVal, as, editId} = this.props;
    return (
      <div>
      <input type='text' value={tVal} onChange={as.changeHandle} ref="input"/>
	  <button className={editId?"":"hide"} onClick={()=>as.it_save(tVal)}>save</button>
	  <button onClick={this.handleAdd.bind(this)}>add</button>
      <button onClick={this.handleToJSON.bind(this)}>toJSON</button>
      ( {tVal} )

      </div>
    )
  }
}


export default Cp1
