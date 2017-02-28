import _ from 'lodash';
import {
  TOGGLE_TOPIC_FILTER
} from '../actions/types';

const initialState = {
  topics: {
    shoes: true,
    bags: false,
    scissors: true
  }
};

export default function (state = initialState, action) {
  if (action.type === TOGGLE_TOPIC_FILTER) {
    const newTopics = _.extend({}, state.topics, { [action.payload.name]: action.payload.value });
    return { ...state, topics: newTopics };
  }
  return state;
}
