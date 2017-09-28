'use strict';

import React, { Component } from 'react';

import Menu from './components/menu.jsx';
import Footer from './components/footer.jsx';

export default class Layout extends Component {
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
