import { CLEAR_FILTERS } from '../../../actions/types';

function GenericCheckboxReducer(initialState, toggleCase) {
  return (state = initialState, action) => {
    switch (action.type) {
      case toggleCase:
        return { ...state, [action.payload.name]: action.payload.value };
      case CLEAR_FILTERS:
        return initialState;
      default:
        return state;
    }
  };
}

export default GenericCheckboxReducer;
