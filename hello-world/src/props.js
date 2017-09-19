import React, { Component } from 'react';
import { render } from 'react-dom';

const App = React.createClass ({
  render() {
    return (
      <div>{this.props.greeting}</div>
    );
  }
});

export default App;
