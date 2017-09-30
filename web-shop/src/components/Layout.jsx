import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Footer from './Footer'
import Menu from './Menu'
import Home from './Home'
import Products from './Products'

const Layout = () => (
  <div className="body">
  <Switch>
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
    </div>
  </Switch>
      <Footer />
  </div>
)

export default Layout
