import { RESET_INFLUENCER_LIST, UPDATE_INFLUENCER_LIST } from '../actions/types';

export default (state = { items: [], page: 1 }, action) => {
  switch (action.type) {
    case RESET_INFLUENCER_LIST:
      return { ...state, items: action.payload.items, page: 1 };
    case UPDATE_INFLUENCER_LIST:
      return { ...state, items: [...state.items, action.payload.items], page: action.payload.page };
    default:
      return state;
  }
};
