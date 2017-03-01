import _ from 'lodash';
import { CLEAR_FILTERS } from '../../../actions/types';

function GenericRadioReducer(initialState, toggleCase) {
  return (state = initialState, action) => {
    switch (action.type) {
      case toggleCase:
        return _.mapValues(state, (value, name) => (action.payload === name));
      case CLEAR_FILTERS:
        return initialState;
      default:
        return state;
    }
  };
}

export default GenericRadioReducer;
