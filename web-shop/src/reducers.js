import { combineReducers } from 'redux'
import {
  ADD_TO_CART
  REMOVE_FROM_CART
  CLEAR_CART
}

function cartOptions (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.product
    case REMOVE_FROM_CART:
      return action.product
    case CLEAR_CART:
      return action
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cartOptions
})

export default rootReducer
