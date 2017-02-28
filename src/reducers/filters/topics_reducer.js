import { TOGGLE_TOPIC_FILTER } from '../../actions/types';

const initialState = {
  shoes: true,
  bags: false,
  scissors: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TOPIC_FILTER:
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}
