"use strict";

import Reflux from 'reflux';

const CartActions = Reflux.createActions([
  'AddToCart',
  'RemoveFromCart',
  'ClearCart'
]);

module.exports = CartActions;
