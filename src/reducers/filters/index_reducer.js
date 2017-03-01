import { combineReducers } from 'redux';
import topics from './topics_reducer';
import genders from './genders_reducer';
import services from './services_reducer';

export default combineReducers({
  topics,
  genders,
  services
});
