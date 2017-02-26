import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/* Any additional reducers should be combined here */

export default combineReducers({
  form: formReducer
});
