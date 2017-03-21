import _ from 'lodash';
import {
  REQUESTED_INFLUENCER_LIST,
  RESET_INFLUENCER_LIST,
  UPDATE_INFLUENCER_LIST
} from '../actions/types';

const initialState = {
  items: [],
  page: 0,
  noMoreResults: false,
  isFetching: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_INFLUENCER_LIST:
      return { ...state, page: action.payload, isFetching: true };
    case RESET_INFLUENCER_LIST:
      return {
        ...state,
        noMoreResults: action.payload.noMoreResults,
        items: action.payload.items,
        isFetching: false
      };
    case UPDATE_INFLUENCER_LIST:
      return {
        ...state,
        noMoreResults: action.payload.noMoreResults,
        items: _.concat(state.items, action.payload.items),
        isFetching: false
      };
    default:
      return state;
  }
};
