import React, { Component } from 'react';
import { render } from 'react-dom';

import App from './props';

render(
  <App greeting="Hello World"/>,
  document.getElementById('container')
)
