import { FETCH_TOPIC_LIST } from '../actions/types';


export default (state = { initialized: false }, action) => {
  switch (action.type) {
    case FETCH_TOPIC_LIST:
      return { ...state, initialized: true };
    default:
      return state;
  }
};
