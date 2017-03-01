import { TOGGLE_PERIOD_FILTER } from '../../actions/types';
import GenericSingleValueMultipleReducer from './templates/generic_single_value_multiple_reducer';

export default GenericSingleValueMultipleReducer({
  'past-7-days': false,
  'past-30-days': false,
  'past-90-days': true
}, TOGGLE_PERIOD_FILTER);
