'use strict';

import React from 'react';

import Menu from './components/menu.jsx';
import Footer from './components/footer';

const Layout = React.createClass ({
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
});
