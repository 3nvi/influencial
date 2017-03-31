import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile';
import Base from './components/Base';

function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Base}>
        <IndexRoute component={Home} />
        <Route path="/profile/:id/" component={Profile} />
      </Route>
    </Router>
  );
}

export default Routes;

