import _ from 'lodash';
import {
  CREATE_TOPIC,
  UPDATE_TOPIC,
  DELETE_TOPIC,
  FETCH_TOPIC_LIST,
  TOGGLE_TOPIC_FILTER,
  CLEAR_FILTERS
} from '../../actions/types';


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TOPIC_LIST:
      return _.mapKeys(_.map(action.payload, o => _.extend({ checked: false }, o)), 'title');
    case CREATE_TOPIC:
      return { ...state, [action.payload.title]: _.extend({ checked: true }, action.payload) };
    case UPDATE_TOPIC:
      return _.mapValues(
        _.mapKeys(state, (o, key) => (key === action.meta.prevTitle ? action.payload.title : key)),
        (o, key) => (key === action.payload.title ? _.extend(o, {
          hashtags: action.payload.hashtags,
          title: action.payload.title
        }) : o)
      );
    case DELETE_TOPIC:
      return _.omit(state, [action.payload.title]);
    case TOGGLE_TOPIC_FILTER:
      return {
        ...state,
        [action.payload.name]: _.extend(
          state[action.payload.name], { checked: action.payload.checked }
        )
      };
    case CLEAR_FILTERS:
      return _.mapValues(state, topic => _.extend(topic, { checked: false }));
    default:
      return state;
  }
};
