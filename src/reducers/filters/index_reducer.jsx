import { combineReducers } from 'redux';
import topicsReducer from './topics_reducer';

export default combineReducers({
  topics: topicsReducer
});
