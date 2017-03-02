import { TOGGLE_ALGORITHM_FILTER } from '../../actions/types';
import GenericSingleValueMultipleReducer from './templates/generic_single_value_multiple_reducer';

export default GenericSingleValueMultipleReducer({
  Pagerank: true,
  Tweetrank: false,
  Simple: false,
}, TOGGLE_ALGORITHM_FILTER);
