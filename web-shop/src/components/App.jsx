import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

//Routes
import Home from './Home.jsx';
import Footer from './Footer'
import Menu from './Menu'

import store, { history } from '../store'

const App = () => (
  <div>
  <Provider store={store}>
    <ConnectedRouter history={ history }>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </ConnectedRouter>
  </Provider>
    <Footer />
  </div>
);

export default App;
