import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';

function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default Routes;

