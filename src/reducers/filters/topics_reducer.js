import _ from 'lodash';
import {
  INIT_TOPIC_FILTER,
  TOGGLE_TOPIC_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case INIT_TOPIC_FILTER:
      return _.mapKeys(_.map(action.payload, o => _.extend({ checked: true }, o)), 'title');
    case TOGGLE_TOPIC_FILTER:
      return {
        ...state,
        [action.payload.name]: _.extend(
          state[action.payload.name], { checked: action.payload.checked }
        )
      };
    case CLEAR_FILTERS:
      return _.mapValues(state, topic => _.extend(topic, { checked: true }));
    default:
      return state;
  }
};
