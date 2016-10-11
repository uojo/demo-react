import * as Actions from './actions'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.Tag_load:
      return {
        data: action.data
      }
    default:
      return state
  }
}

export default reducer;