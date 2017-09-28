'use static'

import { combineReducers } from 'redux'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from './actions'

function cartOptions (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.product] }
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(product => action.product !== product)}
    case CLEAR_CART:
      return { ...state, cart: []}
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cartOptions
})

export default rootReducer
