'use strict';

import React from 'react';
import Layout from './layout.jsx';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

//Routes
import Products from './pages/products.jsx';
import Home from './pages/home.jsx';
import Company from './pages/company.jsx';
import Item from './pages/item.jsx';
import Checkout from './pages/checkout.jsx';
import Receipt from './pages/receipt.jsx';

const history = createHashHistory();
const Routes = () => (
  <Router history={ history }>
  <Route handler={ Layout }>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/item/:id" component={Item} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/receipt" component={Receipt} />
    </Switch>
  </Route>
  </Router>
);

module.exports = Routes;
