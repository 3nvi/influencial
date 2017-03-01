import { TOGGLE_GENDER_FILTER } from '../../actions/types';
import GenericSingleValueMultipleReducer from './templates/generic_single_value_multiple_reducer';

export default GenericSingleValueMultipleReducer({
  both: true,
  male: false,
  female: false
}, TOGGLE_GENDER_FILTER);
