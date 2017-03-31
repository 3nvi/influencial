import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';
import axios from 'axios';

import reducers from './reducers/index';
import Routes from './router';

import '../style/index.scss';

export const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
axios.defaults.headers.common.Authorization = 'Token 6e04ac28c1742cd728277591a5314b95d8ee5477';

function App() {
  window.store = store;
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
