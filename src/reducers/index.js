import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import filtersReducer from './filters/index_reducer';
import modalReducer from './modals';

export default combineReducers({
  form: formReducer,
  modals: modalReducer,
  filters: filtersReducer
});
