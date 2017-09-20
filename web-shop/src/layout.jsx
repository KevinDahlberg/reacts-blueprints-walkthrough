'use strict';

import React, { Component } from 'react';

import Menu from './components/menu.jsx';
import Footer from './components/footer.jsx';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Menu />

          { React.cloneElement (
            this.props.children,
            this.state
          )}

        <Footer />
      </div>
    );
  }
};
