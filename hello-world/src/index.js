import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './props';
import AppState from './state';

class Build extends Component {

  render() {
    return (
    <div>
      <App greeting="Hello World"/>
      <AppState greeting="Let's Bind Some Values"/>
    </div>
    )
  }
}

render (
  <Build />,
  document.getElementById('container')
)
