import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import Routes from './router';

/*
 entry point for css files. If ommitted no CSS bundle will be created
 since it won't be seen as needed
 */
import '../style/index.scss';

function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
