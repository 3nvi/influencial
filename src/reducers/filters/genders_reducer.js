import {
  TOGGLE_GENDER_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';

export const initialGenderState = 'any';

export default (state = initialGenderState, action) => {
  switch (action.type) {
    case TOGGLE_GENDER_FILTER:
      return action.payload;
    case CLEAR_FILTERS:
      return initialGenderState;
    default:
      return state;
  }
};
