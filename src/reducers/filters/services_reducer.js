import {
  TOGGLE_SERVICE_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';

export const initialServiceState = 'twitter';

export default (state = initialServiceState, action) => {
  switch (action.type) {
    case TOGGLE_SERVICE_FILTER:
      return action.payload;
    case CLEAR_FILTERS:
      return initialServiceState;
    default:
      return state;
  }
};
