import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import filtersReducer from './filters/index_reducer';

export default combineReducers({
  form: formReducer,
  filters: filtersReducer
});
