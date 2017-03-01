import { TOGGLE_TOPIC_FILTER } from '../../actions/types';
import GenericCheckboxReducer from './templates/generic_checkbox_reducer';

export default GenericCheckboxReducer({
  shoes: true,
  bags: true,
  scissors: true
}, TOGGLE_TOPIC_FILTER);

