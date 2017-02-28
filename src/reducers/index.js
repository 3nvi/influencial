import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import filtersReducer from './filters_reducer';

export default combineReducers({
  form: formReducer,
  filters: filtersReducer
});
