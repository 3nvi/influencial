import { combineReducers } from 'redux';
import filtersReducer from './filters/index_reducer';

export default combineReducers({
  filters: filtersReducer
});
