import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Home from './components/Home';

function Routes() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default Routes;

