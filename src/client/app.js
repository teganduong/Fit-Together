import React from 'react';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
reducers.routing = routerReducer;

import App from './components/App';
import PostDoc from './containers/PostDoc';
import Home from './containers/Home';
import DoctorDashboard from './containers/DoctorDashboard';
import PatientProfile from './containers/PatientProfile';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/postdoc" component={PostDoc} />
      <Route path="/home" component={Home} />
      <Route path="/doctordashboard" component={DoctorDashboard} />
      <Route path="/patientprofile" component={PatientProfile} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
