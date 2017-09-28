'use strict'
import fetch from 'isomorphic-fetch'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'

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

function receiveProducts(json) {
  return {
    type: RECEIVE_POSTS,
    products: json.data.children.map(child => child.data)
  }
}

export function fetchProducts() {
  return dispatch => {
    return fetch('../products.json')
    .then((response => response.json())
    .then(json => dispatch(receiveProducts(json)))
  }
}
