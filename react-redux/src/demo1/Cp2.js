import React, { Component, PropTypes } from 'react'
import Cp3 from './Cp3'

class Cp2 extends Component {


  render() {
    const {items,as} = this.props;
    return (
      <ul>
        {items.map( it =>
            <Cp3 key={it.id} da={it} as={as}/>
        )}
      </ul>
    )
  }
}


export default Cp2
