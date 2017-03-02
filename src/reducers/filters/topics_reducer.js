import {
  TOGGLE_TOPIC_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';

export const initialTopicState = {
  shoes: true,
  bags: true,
  scissors: true
};

export default (state = initialTopicState, action) => {
  switch (action.type) {
    case TOGGLE_TOPIC_FILTER:
      return { ...state, [action.payload.name]: action.payload.value };
    case CLEAR_FILTERS:
      return initialTopicState;
    default:
      return state;
  }
};
