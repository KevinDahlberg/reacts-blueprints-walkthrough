'use strict'

import React, { Component } from 'react';
import Router from 'react-router-dom';
import Routes from './routes.jsx';
import { render } from 'react-dom';
import '../public/products.json';
import storeConfig from './storeConfig'

const store = storeConfig()

render (
  <Routes store={store} />,
  document.getElementById('container')
);
