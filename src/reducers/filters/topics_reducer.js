import _ from 'lodash';
import {
  TOGGLE_TOPIC_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';

export const initialTopicState = {
  shoes: {
    checked: true,
    hashtags: ['#kitty_shoes', '#doggy_shoes']
  },
  bags: {
    checked: true,
    hashtags: ['#kitty_bags', '#doggy_bags']
  },
  scissors: {
    checked: true,
    hashtags: ['#fenminismisreal', '#whateva']
  }
};

function resetCheckedState(state) {
  const resetedState = {};
  _.forOwn(state, (value, key) => {
    resetedState[key] = {
      checked: true,
      hashtags: value.hashtags
    };
  });
  return resetedState;
}

export default (state = initialTopicState, action) => {
  switch (action.type) {
    case TOGGLE_TOPIC_FILTER:
      return {
        ...state,
        [action.payload.name]: {
          checked: action.payload.checked,
          hashtags: state[action.payload.name].hashtags
        }
      };
    case CLEAR_FILTERS:
      return resetCheckedState(state);
    default:
      return state;
  }
};
