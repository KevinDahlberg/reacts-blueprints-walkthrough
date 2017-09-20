'use strict';
import Reflux from 'reflux';
import Request from 'superagent'
import Actions from '../actions/products.js';

class ProductStore extends Reflux.Store {

    constructor()
    {
      super();
      this.state = {}
      this.listenTo(Actions, this.updateActions);
    }
    updateActions()
      {
        Actions.load;
      }


}

module.exports = ProductStore;
