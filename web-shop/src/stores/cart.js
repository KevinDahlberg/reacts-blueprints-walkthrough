"use strict";

import Reflux from 'reflux';
import CartActions from '../actions/cart';
let _cart = {cart: []};

class CartStore extends Reflux.Store {
  constructor()
  {
    super();
    this.state = {}
    this.listenables = Actions;
  }

  onAddToCart(item) {
    _cart.cart.push(item);
    this.emit();
  }

  onRemoveFromCart(item) {
    _cart.cart = _cart.cart.filter((cartItem) => {
      return item !== cartItem
    });
    this.emit();
  }

  onClearCart() {
    _cart.cart = [];
    this.emit();
  }

  emit() {
    this.trigger(_cart);
  }
}

module.exports = CartStore;
