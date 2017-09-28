'use strict';

import React, { Component } from 'react';
import Reflux from 'reflux';

import Menu from './components/menu.jsx';
import Footer from './components/footer.jsx';
import Actions from './actions/products';
import ProductStore from './stores/products';

export default class Layout extends Reflux.Component {
  constructor(props)
  {
    super(props);
    this.state = {};
    this.store = ProductStore;
  }

  render() {
    return (
      <div>
        <Menu />
        <Footer />
      </div>
    );
  }
};
