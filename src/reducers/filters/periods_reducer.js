import {
  TOGGLE_PERIOD_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';

export const initialPeriodState = 'past-30-days';

export default (state = initialPeriodState, action) => {
  switch (action.type) {
    case TOGGLE_PERIOD_FILTER:
      return action.payload;
    case CLEAR_FILTERS:
      return initialPeriodState;
    default:
      return state;
  }
};
