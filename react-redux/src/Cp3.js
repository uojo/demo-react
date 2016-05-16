import React, { PropTypes, Component } from 'react'

class Cp3 extends Component {
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


export default Cp3
