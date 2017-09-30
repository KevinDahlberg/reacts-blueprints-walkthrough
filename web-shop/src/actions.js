import fetch from 'isomorphic-fetch'

//Constants
//Cart
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

//Products
export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

//Customer
export const SAVE_ADDRESS = 'SAVE_ADDRESS'

//Cart Actions
export function addToCart (product) {
  return {
    type: ADD_TO_CART,
    product
  }
}

export function removeFromCart (product) {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}

export function clearCart () {
  return {
    type: CLEAR_CART
  }
}

function requestProducts () {
  return {
    type: REQUEST_PRODUCTS
  }
}

function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.data.children.map(child => child.data)
  }
}

export function fetchProducts() {
  return dispatch => {
    dispatch(requestProducts())
    return fetch('./products.json')
    .then(response => response.json())
    .then(json => dispatch(receiveProducts(json)))
  }
}
