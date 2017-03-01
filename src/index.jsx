import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';

import reducers from './reducers/index';
import Routes from './router';

import '../style/index.scss';

function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  window.store = store;
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
