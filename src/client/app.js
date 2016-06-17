import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
reducers.routing = routerReducer;

import App from './components/App';
import Login from './components/Login';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore  (browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="Login" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
