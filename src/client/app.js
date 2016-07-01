import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
reducers.routing = routerReducer;

import App from './components/App';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Signup from './containers/Auth';

// Dashbboard Components
import Profile from './components/Dashboard/Profile/Profile.js';
import PlaceHolder from './components/PlaceHolder.js';

import Stats from './containers/Stats.js';
import Challenges from './components/Dashboard/Items/Challenges/Challenges';
import Teams from './containers/Teams'; // redux container
// import TeamMemberList from './containers/TeamMemberList'; // redux container
import Tips from './components/Dashboard/Items/Tips/Tips';
import Settings from './components/Dashboard/Items/Settings/Settings';
import Logbook from './components/Dashboard/Items/Logbook/Logbook';
require('./assets/css/style.css');

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} >
        <Route component={Dashboard}>
          <IndexRoute component={Stats} />
        </Route>
        <Route path="/signup" component={Signup} />
        <Route component={Home} />
        <Route path="/dashboard" component={Dashboard} >
          <IndexRoute component={Profile} />
          <Route path="/dashboard/settings"component={Settings} />
          <Route path="/dashboard/log"component={PlaceHolder} />
          <Route path="/dashboard/stats"component={Stats} />
          <Route path="/dashboard/challenges"component={Challenges} />
          <Route path="/dashboard/teams"component={Teams} />
          <Route path="/dashboard/tips"component={Tips} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
