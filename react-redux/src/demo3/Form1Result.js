import React from 'react'
import { values as valuesDecorator } from 'redux-form/immutable'

/**
 * This is just like the Values component that the other examples import, except that it works
 * with Immutable JS.
 */
const ImmutableValues = ({ form }) => {
  const decorator = valuesDecorator({ form })
  const component = ({ values }) => {
    console.log(7,values);
    return (
      <div>
        <h2>Values</h2>
        <div>{JSON.stringify(values ? values.toJS() : {}, null, 2)}</div>
      </div>
    )
  }
  const Decorated = decorator(component)
  return <Decorated/>
}

export default ImmutableValues