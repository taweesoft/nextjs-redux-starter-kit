import Action from 'types/Action'
import actionTypes from 'redux/actionTypes'

const initialState = {
  isLoading: false
}

export default (state = initialState, action: Action) => {
  switch(action.type) {
    case actionTypes.APP_TOGGLE_LOADING:
    return {
      isLoading: action.payload.isLoading
    }
    default:
      return state
  }
}