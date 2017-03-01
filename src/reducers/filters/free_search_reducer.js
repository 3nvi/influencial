import { TOGGLE_FREE_TEXT_FILTER } from '../../actions/types';
import GenericSingleValueReducer from './templates/generic_single_value_reducer';

export default GenericSingleValueReducer('', TOGGLE_FREE_TEXT_FILTER);
