import { TOGGLE_FREE_TEXT_FILTER } from '../../actions/types';

export const initialFreeTextState = '';

export default (state = initialFreeTextState, action) => {
  switch (action.type) {
    case TOGGLE_FREE_TEXT_FILTER:
      return action.payload;
    default:
      return state;
  }
};
