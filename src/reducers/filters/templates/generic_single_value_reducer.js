import { CLEAR_FILTERS } from '../../../actions/types';

function GenericSingleValueReducer(initialState, toggleCase) {
  return (state = initialState, action) => {
    switch (action.type) {
      case toggleCase:
        return action.payload;
      case CLEAR_FILTERS:
        return initialState;
      default:
        return state;
    }
  };
}

export default GenericSingleValueReducer;
