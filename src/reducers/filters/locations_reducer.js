import {
  ADD_LOCATION_FILTER,
  REMOVE_LOCATION_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_LOCATION_FILTER:
      return [...state, action.payload];
    case REMOVE_LOCATION_FILTER:
      return state.filter(location => location !== action.payload);
    case CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
};
