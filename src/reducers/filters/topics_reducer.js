import { TOGGLE_TOPIC_FILTER } from '../../actions/types';
import GenericMultipleValueMultipleReducer from './templates/generic_multiple_value_multiple_reducer';

export default GenericMultipleValueMultipleReducer({
  shoes: true,
  bags: true,
  scissors: true
}, TOGGLE_TOPIC_FILTER);

