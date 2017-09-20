'use strict'

import React, { Component } from 'react';
import Router from 'react-router-dom';
import Routes from './routes.jsx';
import { render } from 'react-dom';
import '../public/products.json';
render (
  <Routes />,
  document.getElementById('container')
);
