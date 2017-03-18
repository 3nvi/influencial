import _ from 'lodash';
import {
  INIT_TOPIC_FILTER,
  TOGGLE_TOPIC_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';


function resetCheckedState(state) {
  const resetedState = {};
  _.forOwn(state, (value, key) => {
    resetedState[key] = {
      checked: true,
      url: value.url,
      title: key,
      hashtags: value.hashtags
    };
  });
  return resetedState;
}

export default (state = {}, action) => {
  switch (action.type) {
    case INIT_TOPIC_FILTER:
      return _.mapKeys(_.map(action.payload, o => _.extend({ checked: true }, o)), 'title');
    case TOGGLE_TOPIC_FILTER:
      return {
        ...state,
        [action.payload.name]: {
          checked: action.payload.checked,
          url: state[action.payload.name].url,
          title: action.payload.name,
          hashtags: state[action.payload.name].hashtags
        }
      };
    case CLEAR_FILTERS:
      return resetCheckedState(state);
    default:
      return state;
  }
};
