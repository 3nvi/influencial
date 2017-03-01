import { TOGGLE_SERVICE_FILTER } from '../../actions/types';
import GenericSingleValueMultipleReducer from './templates/generic_single_value_multiple_reducer';

export default GenericSingleValueMultipleReducer({
  both: true,
  twitter: false,
  instagram: false
}, TOGGLE_SERVICE_FILTER);
