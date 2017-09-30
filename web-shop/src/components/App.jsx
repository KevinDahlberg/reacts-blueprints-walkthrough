import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

//Routes
import Layout from './Layout'

import store, { history } from '../store'

const App = () => (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={ history }>
        <Layout />
      </ConnectedRouter>
    </Provider>
  </div>
);

export default App;
