import {
  ADD_NOTIFICATION,
  REMOVE_NOTIFICATION
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return action.payload;
    case REMOVE_NOTIFICATION:
      return '';
    default:
      return state;
  }
};
