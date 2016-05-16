import React, { PropTypes, Component } from 'react'
import Cp3 from './Cp3'

class Cp2 extends Component {
  handleSave() {
      console.log("toJSON");
  }

  render() {
    const {items} = this.props;
    return (
      <ul>
        {items.map(it =>
            <li key={it.id}>{it.name}</li>
        )}
      </ul>
    )
  }
}


export default Cp2
